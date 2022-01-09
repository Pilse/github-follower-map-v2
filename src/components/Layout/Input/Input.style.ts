import styled from "styled-components";

export const InputLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 26px;
  padding: 6px 9px;

  border: 1px solid ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.RoundStyles.rounded}
`;

export const InputText = styled.input`
  display: flex;
  border: none;
  outline: none;

  ${({ theme }) => theme.TextStyles.Paragraph1};

  ::placeholder {
    color: ${({ theme }) => theme.Colors.Gray6};
  }
`;
