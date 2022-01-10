import React from "react";

import Icon from "../Icon/Icon";

import { IInput } from "../../types";
import { InputLayout, InputText, IconBox, InputBox } from "./Input.style";

function Input({ onChangeHandler, onFocusHandler, onBlurHandler }: IInput) {
  return (
    <InputLayout>
      <IconBox>
        <Icon name="default_avatar" />
      </IconBox>

      <InputBox>
        <InputText
          type="text"
          placeholder="검색할 유저를 입력해주세요"
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
      </InputBox>
    </InputLayout>
  );
}

export default Input;
