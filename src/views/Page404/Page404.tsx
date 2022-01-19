import React from "react";

import { ERROR, ERROR_MESSAGE } from "../../utils/constant";

import Error from "../../components/Error/Error";

function Page404() {
  return (
    <Error
      error={ERROR.PAGE_NOT_FOUND}
      message={ERROR_MESSAGE.PAGE_NOT_FOUND}
    />
  );
}

export default Page404;
