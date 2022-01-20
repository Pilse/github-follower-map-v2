import React from "react";
import { useNavigate } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

import { ICard } from "../types";
import {
  CardLayout,
  IconBox,
  CardContentsBox,
  UserBox,
  ButtonGroupBox,
  ButtonBox,
  UserNameBox,
  UserImg,
  UserText,
  UserBioText,
} from "./Card.style";

function Card({ imgUrl, homeUrl, user, bio, onCloseHandler }: ICard) {
  const navigate = useNavigate();

  return (
    <CardLayout>
      <IconBox onClick={onCloseHandler}>
        <Icon name="close" />
      </IconBox>

      <CardContentsBox>
        <UserBox>
          <UserNameBox>
            <UserImg src={imgUrl} alt={user} />

            <UserText> {user} </UserText>
          </UserNameBox>

          <UserBioText> {bio} </UserBioText>
        </UserBox>

        <ButtonGroupBox>
          <ButtonBox onClick={() => navigate(`/result?user=${user}`)}>
            <Button
              shape="rounded"
              size="lg"
              text={`${user}의 그룹을 알아보세요`}
              icon="group"
              active
            />
          </ButtonBox>

          <ButtonBox onClick={() => (window.location.href = homeUrl)}>
            <Button
              shape="rounded"
              size="lg"
              text={`${user}의 깃허브를 방문해보세요`}
              icon="github"
              active
            />
          </ButtonBox>
        </ButtonGroupBox>
      </CardContentsBox>
    </CardLayout>
  );
}

export default Card;
