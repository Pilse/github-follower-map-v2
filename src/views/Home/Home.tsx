import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Icon from "../../components/Layout/Icon/Icon";

import {
  HomeLayout,
  HeroBox,
  TextBox,
  ButtonBox,
  SmallParagraph,
  BigParagraph,
  StartButton,
} from "./Home.style";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <Header />

      <HeroBox>
        <Icon name="hero" />
      </HeroBox>

      <TextBox>
        <SmallParagraph>
          내가 팔로우하고 있는 사람은 누구를 팔로우하고 있을까?
        </SmallParagraph>
        <BigParagraph>나는 어느 집단에 속해 있을까?</BigParagraph>
      </TextBox>

      <ButtonBox>
        <StartButton onClick={() => navigate("/search")}>시작하기</StartButton>
      </ButtonBox>
    </HomeLayout>
  );
}

export default Home;
