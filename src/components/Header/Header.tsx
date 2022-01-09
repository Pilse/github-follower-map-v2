import React from "react";

import Icon from "../Layout/Icon/Icon";

import {
  HeaderLayout,
  HeaderBox,
  TitleBox,
  TitleHeading,
  TextParagraph,
} from "./Header.style";

function Header() {
  return (
    <HeaderLayout>
      <HeaderBox>
        <Icon name="network_left" />
      </HeaderBox>

      <TitleBox>
        <TitleHeading>GITHUB MAP</TitleHeading>
        <TextParagraph>which group are you in?</TextParagraph>
      </TitleBox>

      <HeaderBox>
        <Icon name="network_right" />
      </HeaderBox>
    </HeaderLayout>
  );
}

export default Header;
