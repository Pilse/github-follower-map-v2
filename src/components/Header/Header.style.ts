import styled, { css } from "styled-components";

import { IHeader } from "../interfaces";

export const HeaderLayout = styled.div<IHeader>`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 65px;

  ${({ show }) =>
    show &&
    css`
      height: 0;
    `}
`;

export const HeaderBox = styled.div`
  display: flex;
  max-width: 70px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  min-width: 115px;
`;

export const TitleHeading = styled.h1`
  ${({ theme }) => theme.TextStyles.Heading3};
`;

export const TextParagraph = styled.p`
  color: ${({ theme }) => theme.Colors.GrayB};

  ${({ theme }) => theme.TextStyles.Paragraph3};
`;
