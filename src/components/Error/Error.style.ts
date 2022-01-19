import styled from "styled-components";

export const ErrorLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const IconBox = styled.div`
  width: min(150px, 60%);
`;

export const ErrorBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  gap: 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.Colors.GrayF};
`;

export const ButtonBox = styled.div`
  margin-top: 80px;
  width: min(200px, 60%);
`;

export const ErrorMessageText = styled.span`
  width: min(200px, 60%);
  word-break: keep-all;
  ${({ theme }) => theme.TextStyles.Heading1};
`;

export const ErrorUserText = styled.span`
  width: min(200px, 60%);
  word-break: keep-all;
  color: ${({ theme }) => theme.Colors.Primary};
`;
