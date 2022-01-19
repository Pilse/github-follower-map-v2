import React from "react";

import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

import { IError } from "../types";
import {
  ErrorLayout,
  ErrorBox,
  IconBox,
  ButtonBox,
  ErrorMessageText,
  ErrorUserText,
} from "./Error.style";

function Error({ error, message, user }: IError) {
  const navigate = useNavigate();
  return (
    <>
      <ErrorLayout>
        <Header />

        <ErrorBox>
          <IconBox>
            <Icon name={error} />
          </IconBox>

          <ErrorMessageText>
            <ErrorUserText>{user}</ErrorUserText>
            {message}
          </ErrorMessageText>

          <ButtonBox onClick={() => navigate("/")}>
            <Button
              shape="angled"
              size="sm"
              text="홈으로 돌아가기"
              icon="home"
              active
              vertical
            />
          </ButtonBox>
        </ErrorBox>
      </ErrorLayout>
    </>
  );
}

export default Error;
