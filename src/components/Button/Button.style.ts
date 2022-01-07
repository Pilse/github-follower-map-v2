import styled, { css, DefaultTheme } from "styled-components";

export const Container = styled.button<any>`
  border: none;
  outline: none;
  display: flex;
  flex-direction: ${({ placement }) => placement ?? "row"};
  align-itmes: center;
  justify-contents: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.Colors.White};

  ${({ shape, theme }) => theme.RoundStyles[shape]};

  ${({ size, theme }) => theme.PaddingStyles[size]};

  ${({ isActive }) =>
    isActive
      ? css`
          border: 2px solid ${({ theme }) => theme.Colors.Primary};
        `
      : css``};
`;

export const Text = styled.div<DefaultTheme>`
  font-size: ${({ theme }) => theme.TextStyles.Paragraph1};
`;
