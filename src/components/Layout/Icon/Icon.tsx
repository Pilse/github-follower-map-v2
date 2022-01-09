import React from "react";

import { IIcon } from "../../interfaces";

function Icon({ name }: IIcon) {
  return (
    <object
      type="image/svg+xml"
      data={`/assets/images/${name}.svg`}
      aria-label={name}
    />
  );
}

export default Icon;