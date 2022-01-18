import styled, { keyframes } from "styled-components";

const cardUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const CardLayout = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  padding: 17px 26px 45px;
  background-color: ${({ theme }) => theme.Colors.White};
  border-radius: 20px 20px 0 0;
  gap: 37px;
  transform: translateY(100%);
  animation: 0.3s ${cardUp} forwards;
`;

export const IconBox = styled.div`
  width: 15px;
  height: 16px;
  margin-left: auto;
  cursor: pointer;
`;

export const CardContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligin-items: center;
  gap: 128px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligin-items: center;
  gap: 40px;
`;

export const ButtonGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserNameBox = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
  gap: 15px;
`;

export const ButtonBox = styled.div`
  width: 100%;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserText = styled.p`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.TextStyles.Heading3};
`;

export const UserBioText = styled.p`
  ${({ theme }) => theme.TextStyles.Paragraph2};
  color: ${({ theme }) => theme.Colors.Gray5};
  text-align: center;
`;
