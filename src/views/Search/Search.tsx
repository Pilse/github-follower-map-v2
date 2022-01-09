import React, { useEffect } from "react";

import useInput from "../../hooks/useInput";

import Header from "../../components/Header/Header";
import Input from "../../components/Layout/Input/Input";
import Icon from "../../components/Layout/Icon/Icon";

import { SearchLayout, SearchForm, IconBox } from "./Search.style";
import { IuseInput } from "../../hooks/interfaces";

function Search() {
  const {
    input,
    focus,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  }: IuseInput = useInput();

  useEffect(() => {
    //TODO: input 값 핸들링
    console.log(input);
  }, [input]);

  return (
    <SearchLayout>
      {!focus && <Header />}

      <SearchForm>
        {focus && (
          <IconBox>
            <Icon name="back" />
          </IconBox>
        )}

        <Input
          onChangeHandler={onChangeHandler}
          onFocusHandler={onFocusHandler}
          onBlurHandler={onBlurHandler}
        />
      </SearchForm>
    </SearchLayout>
  );
}

export default Search;
