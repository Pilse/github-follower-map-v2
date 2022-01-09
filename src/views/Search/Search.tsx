import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/result?user=${input}`);
  };

  return (
    <SearchLayout>
      {!focus && <Header />}

      <SearchForm onSubmit={onSubmitHandler}>
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
