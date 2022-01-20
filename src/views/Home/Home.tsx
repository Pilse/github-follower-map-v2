import React from "react";
import { useNavigate } from "react-router-dom";

import { HOME } from "../../utils/constant";

import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";

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
        <SmallParagraph>{HOME.FOLLOW}</SmallParagraph>

        <BigParagraph>{HOME.GROUP}</BigParagraph>
      </TextBox>

      <ButtonBox>
        <StartButton onClick={() => navigate("/search")}>시작하기</StartButton>
      </ButtonBox>
    </HomeLayout>
  );
}

export default Home;
