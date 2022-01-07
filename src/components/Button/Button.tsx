import React from "react";
import { ButtonProps } from "../interfaces";
import { Container, Text } from "./Button.style";

function Button(props: ButtonProps) {
  return (
    <Container props={props}>
      <i className={props.icon}></i>

      <Text>{props.text}</Text>
    </Container>
  );
}

export default Button;
