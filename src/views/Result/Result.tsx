import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import useFollowing from "../../hooks/useFollowing";
import useUser from "../../hooks/useUser";
import D3Model from "../../d3/d3.index";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
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
  TextParagraph,
  Line,
} from "./Result.style";

function Result() {
  const location = useLocation();
  const searchParams = location.search;

  const { mapObject, loading, error } = useFollowing(searchParams);

  const { userData, setUser, resetUser } = useUser();

  const [path, setPath] = useState<ResultState>("following");

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (loading) {
      resetUser();
    } else if (mapObject) {
      const network = new D3Model.Network(svgRef.current!, mapObject);

      network.forceNetwork(setUser);
    }
  }, [loading, mapObject, setUser, resetUser]);

  return (
    <ResultLayout>
      {!loading && !error && (
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
              <ButtonBox onClick={() => setPath(() => "following")}>
                <Button
                  shape="angled"
                  size="sm"
                  text="팔로잉"
                  icon="follow"
                  vertical
                  active={path === "following"}
                />
              </ButtonBox>

              <ButtonBox onClick={() => setPath(() => "grouping")}>
                <Button
                  shape="angled"
                  size="sm"
                  text="내가 속한 그룹"
                  icon="group"
                  vertical
                  active={path === "grouping"}
                />
              </ButtonBox>
            </OptionBox>
          </InfoBox>

          <FollowingSvg ref={svgRef}></FollowingSvg>
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

      {error && (
        <Error error={error.error} message={error.message} user={error.user} />
      )}
    </ResultLayout>
  );
}

export default Result;
