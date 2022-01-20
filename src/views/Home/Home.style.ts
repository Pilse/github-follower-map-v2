import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const HeroBox = styled.div`
  width: min(350px, 85%);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ButtonBox = styled.div`
  width: min(350px, 80%);
`;

export const SmallParagraph = styled.p`
  color: ${({ theme }) => theme.Colors.Gray7};

  ${({ theme }) => theme.TextStyles.Paragraph3};
`;

export const BigParagraph = styled.p`
  color: ${({ theme }) => theme.Colors.Gray6};

  ${({ theme }) => theme.TextStyles.Heading2};
`;

export const StartButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 18px 0 17px;
  border: none;
  outline: none;
  cursor: pointer;

  ${({ theme }) => theme.RoundStyles.rounded};

  border: 1px solid ${({ theme }) => theme.Colors.Primary};

  background-color: ${({ theme }) => theme.Colors.Primary + "0D"};

  color: ${({ theme }) => theme.Colors.Gray4};

  ${({ theme }) => theme.TextStyles.Heading1};
`;
