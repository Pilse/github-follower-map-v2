import styled, { css } from "styled-components";

import { IButton } from "../../interfaces";

export const ButtonLayout = styled.button<IButton>`
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  align-items: center;
  gap: 8px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.Colors.White};

  ${({ shape, theme }) => theme.RoundStyles[shape]};

  ${({ size, theme }) => theme.PaddingStyles[size]};

  ${({ active }) =>
    active
      ? css`
          border: 2px solid ${({ theme }) => theme.Colors.Primary};
        `
      : css``};
`;

export const ButtonParagraph = styled.div`
  font-size: ${({ theme }) => theme.TextStyles.Paragraph2};
`;
