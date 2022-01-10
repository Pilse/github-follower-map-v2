import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import useFollowing from "../../hooks/useFollowing";

import Header from "../../components/Header/Header";
import Button from "../../components/Layout/Button/Button";

import { ResultState } from "../types";

import {
  ResultLayout,
  InfoBox,
  UserBox,
  AvatarBox,
  OptionBox,
  ButtonBox,
  TextParagraph,
  Line,
} from "./Result.style";

function Result() {
  const location = useLocation();
  const searchParams = location.search;

  const { mapObject, loading } = useFollowing(searchParams);

  const [path, setPath] = useState<ResultState>("following");

  // Todo: mapObject를 통해 network 모델 만들기
  console.log(mapObject, loading);

  return (
    <ResultLayout>
      <Header />

      {!loading && (
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
      )}
    </ResultLayout>
  );
}

export default Result;
