import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import useFollowing from "../../hooks/useFollowing";
import useUser from "../../hooks/useUser";
import D3Model from "../../d3/d3.index";
import findCoummunity from "./jLouvain";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import { ResultState } from "../types";

import {
  ResultLayout,
  InfoBox,
  UserBox,
  AvatarBox,
  OptionBox,
  ButtonBox,
  CardBox,
  FollowingSvg,
  GroupSvg,
  TextParagraph,
  Line,
} from "./Result.style";

function Result() {
  const location = useLocation();
  const searchParams = location.search;

  const { mapObject, loading, error } = useFollowing(searchParams);

  const { userData, setUser, resetUser } = useUser();

  const [option, setOption] = useState<ResultState>("following");

  const followingSvgRef = useRef<SVGSVGElement>(null);

  const groupSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (loading) {
      resetUser();
    } else if (mapObject) {
      if (option === "following") {
        const network = new D3Model.Network(
          followingSvgRef.current!,
          mapObject
        );

        network.forceNetwork(setUser);
      } else {
        const communityMembers = findCoummunity(
          mapObject.nodes[0].name,
          mapObject.nodes,
          mapObject.links
        );

        const bubble = new D3Model.Bubble(
          groupSvgRef.current!,
          communityMembers
        );

        bubble.forceBubble(setUser);
      }
    }
  }, [loading, mapObject, option, setUser, resetUser]);

  return (
    <ResultLayout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error.error} message={error.message} user={error.user} />
      ) : (
        <>
          <InfoBox>
            <UserBox>
              <AvatarBox>
                <img
                  src={mapObject.nodes[0].avatar}
                  alt={mapObject.nodes[0].name}
                />
              </AvatarBox>

              <TextParagraph>{mapObject.nodes[0].name}</TextParagraph>
            </UserBox>

            <Line />

            <OptionBox>
              <ButtonBox onClick={() => setOption(() => "following")}>
                <Button
                  shape="angled"
                  size="sm"
                  text="팔로잉"
                  icon="follow"
                  vertical
                  active={option === "following"}
                />
              </ButtonBox>

              <ButtonBox onClick={() => setOption(() => "grouping")}>
                <Button
                  shape="angled"
                  size="sm"
                  text="내가 속한 그룹"
                  icon="group"
                  vertical
                  active={option === "grouping"}
                />
              </ButtonBox>
            </OptionBox>
          </InfoBox>

          {option === "following" ? (
            <FollowingSvg ref={followingSvgRef}></FollowingSvg>
          ) : (
            <GroupSvg ref={groupSvgRef}></GroupSvg>
          )}
        </>
      )}

      {userData && (
        <CardBox>
          <Card
            user={userData.login}
            imgUrl={userData.avatar_url}
            homeUrl={userData.html_url}
            bio={userData.bio}
            onCloseHandler={resetUser}
          />
        </CardBox>
      )}
    </ResultLayout>
  );
}

export default Result;
