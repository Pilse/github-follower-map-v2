import React from "react";

import Icon from "../Icon/Icon";

import { InputLayout, InputText } from "./Input.style";

function Input() {
  return (
    <InputLayout>
      <Icon name="default_avatar" />

      <InputText type="text" placeholder="검색할 유저를 입력해주세요" />
    </InputLayout>
  );
}

export default Input;
