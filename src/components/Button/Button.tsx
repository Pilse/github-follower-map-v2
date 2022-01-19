import React from "react";

import Icon from "../Icon/Icon";

import { IButton } from "../types";
import { ButtonLayout, IconBox, ButtonParagraph } from "./Button.style";

function Button(props: IButton) {
  return (
    <ButtonLayout {...props}>
      <IconBox>
        <Icon name={props.icon} />
      </IconBox>

      <ButtonParagraph>{props.text}</ButtonParagraph>
    </ButtonLayout>
  );
}

export default Button;
