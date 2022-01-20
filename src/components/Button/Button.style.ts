import styled, { css } from "styled-components";

import { IButton } from "../types";

export const ButtonLayout = styled.button<IButton>`
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.Colors.White};

  ${({ size }) =>
    size === "sm" &&
    css`
      height: 80px;
    `};

  ${({ shape, theme }) => theme.RoundStyles[shape]};

  ${({ size, theme }) => theme.PaddingStyles[size]};

  ${({ active }) =>
    active
      ? css`
          border: 2px solid ${({ theme }) => theme.Colors.Primary};
        `
      : css``};
`;

export const IconBox = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
`;

export const ButtonParagraph = styled.div`
  ${({ theme }) => theme.TextStyles.Paragraph2};
  color: ${({ theme }) => theme.Colors.Gray6};
  font-weight: bold;
  word-break: keep-all;
`;
