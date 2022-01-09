import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
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
