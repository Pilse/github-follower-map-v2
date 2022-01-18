import styled from "styled-components";

export const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;
  padding: 20px 0;

  background-color: ${({ theme }) => theme.Colors.GrayF};
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const AvatarBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.Colors.White};

  img {
    border-radius: 50%;
  }
`;

export const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

export const ButtonBox = styled.div`
  width: min(133px, 40%);
`;

export const CardBox = styled.div`
  position: absolute;
  display: flex;
  top: -15px;
  flex-direction: column-reverse;
  width: 100%;
  height: calc(100% + 15px);
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => `${theme.Colors.Gray9}26`};
  overflow-y: hidden;
`;

export const FollowingSvg = styled.svg`
  display: flex;
  width: 100%;
  flex-direction: column;

  line {
    stroke: ${({ theme }) => theme.Colors.Black + "33"};
  }

  image {
    clip-path: polygon(
      34.54915% 2.44717%,
      65.45085% 2.44717%,
      90.45085% 20.61074%,
      100% 50%,
      90.45085% 79.38926%,
      65.45085% 97.55283%,
      34.54915% 97.55283%,
      9.54915% 79.38926%,
      0% 50%,
      9.54915% 20.61074%
    );
    cursor: pointer;
  }
`;

export const TextParagraph = styled.p`
  ${({ theme }) => theme.TextStyles.Heading3};
  color: ${({ theme }) => theme.Colors.Gray4};
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  width: min(80%, 325px);
  height: 1px;

  background-color: ${({ theme }) => theme.Colors.GrayD};
`;
