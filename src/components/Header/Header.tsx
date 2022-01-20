import React from "react";

import Icon from "../Icon/Icon";

import { HEADER } from "../../utils/constant";

import { IHeader } from "../types";
import {
  HeaderLayout,
  HeaderBox,
  TitleBox,
  TitleHeading,
  TextParagraph,
} from "./Header.style";

function Header(show: IHeader) {
  return (
    <HeaderLayout {...show}>
      <HeaderBox>
        <Icon name="network_left" />
      </HeaderBox>

      <TitleBox>
        <TitleHeading>{HEADER.TITLE}</TitleHeading>

        <TextParagraph>{HEADER.SUBTITLE}</TextParagraph>
      </TitleBox>

      <HeaderBox>
        <Icon name="network_right" />
      </HeaderBox>
    </HeaderLayout>
  );
}

export default Header;
