import React from "react";

import { IIcon } from "../types";

function Icon({ name }: IIcon) {
  return <img src={`/assets/images/${name}.png`} alt={name} />;
}

export default Icon;
