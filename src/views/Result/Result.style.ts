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

export const GroupLabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  gap: 8px;
`;

export const IconBox = styled.div`
  width: 14px;
  height: 15px;
`;

export const FollowingSvg = styled.svg`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.Colors.White};

  line {
    stroke: ${({ theme }) => theme.Colors.Black + "33"};
  }

  image {
    clip-path: polygon(
      50% 0%,
      80% 10%,
      100% 35%,
      100% 70%,
      80% 90%,
      50% 100%,
      20% 90%,
      0% 70%,
      0% 35%,
      20% 10%
    );
    cursor: pointer;
  }
`;

export const GroupSvg = styled(FollowingSvg)``;

export const TextParagraph = styled.p`
  ${({ theme }) => theme.TextStyles.Heading3};
  color: ${({ theme }) => theme.Colors.Gray4};
`;

export const GroupLabelText = styled.span`
  ${({ theme }) => theme.TextStyles.Paragraph3};
  color: ${({ theme }) => theme.Colors.GrayA};
  word-break: keep-all;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  width: min(80%, 325px);
  height: 1px;

  background-color: ${({ theme }) => theme.Colors.GrayD};
`;
