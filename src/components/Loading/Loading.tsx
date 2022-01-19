import React from "react";

import { PuffLoader } from "react-spinners";

import { LoadingLayout, IconBox } from "./Loading.style";

import Icon from "../Icon/Icon";

function Loading() {
  return (
    <LoadingLayout>
      <IconBox>
        <Icon name="avatar_loading" />
      </IconBox>

      <PuffLoader />
    </LoadingLayout>
  );
}

export default Loading;
