import React from "react";

import Icon from "../Icon/Icon";

import { IButton } from "../../interfaces";
import { ButtonLayout, ButtonParagraph } from "./Button.style";

function Button(props: IButton) {
  return (
    <ButtonLayout {...props}>
      <Icon name={props.icon} />

      <ButtonParagraph>{props.text}</ButtonParagraph>
    </ButtonLayout>
  );
}

export default Button;
