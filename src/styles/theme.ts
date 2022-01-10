import { css, DefaultTheme } from "styled-components";

const Colors = {
  Primary: "#18ED87",

  Black: "#000000",
  White: "#FFFFFF",

  Gray4: "#444444",
  Gray5: "#555555",
  Gray6: "#666666",
  Gray7: "#777777",
  Gray8: "#888888",
  Gray9: "#999999",
  GrayA: "#AAAAAA",
  GrayB: "#BBBBBB",
  GrayC: "#CCCCCC",
  GrayD: "#DDDDDD",
  GrayE: "#EEEEEE",
  GrayF: "#F6F6F6",
};

const TextStyles = {
  Heading1: css`
    font-size: 26px;
    font-weight: 700;
  `,
  Heading2: css`
    font-size: 24px;
    font-weight: 700;
  `,
  Heading3: css`
    font-size: 20px;
    font-weight: 700;
  `,
  Paragraph1: css`
    font-size: 16px;
    font-weight: 500;
  `,
  Paragraph2: css`
    font-size: 14px;
    font-weight: 500;
  `,
  Paragraph3: css`
    font-size: 12px;
    font-weight: 500;
  `,
  Paragraph4: css`
    font-size: 10px;
    font-weight: 500;
  `,
};

const RoundStyles = {
  rounded: css`
    border-radius: 50px;
  `,
  angled: css`
    border-radius: 10px;
  `,
};

const PaddingStyles = {
  sm: css`
    padding: 7px 19px;
  `,
  lg: css`
    padding: 15px 18px;
  `,
};

const Theme: DefaultTheme = {
  Colors,
  TextStyles,
  RoundStyles,
  PaddingStyles,
};

export default Theme;
