import styled from "styled-components";

export const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

export const FollowingSvg = styled.svg`
  display: flex;
  width: 100%;
  flex-direction: column;

  line {
    stroke: ${({ theme }) => theme.Colors.Black + "26"};
  }

  image {
    clip-path: circle(40%);
    stroke: red;
  }
`;

export const TextParagraph = styled.p`
  ${({ theme }) => theme.TextStyles.Paragraph1};
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  width: min(80%, 325px);
  height: 1px;

  background-color: ${({ theme }) => theme.Colors.GrayD};
`;
