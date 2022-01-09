import styled from "styled-components";

export const InputLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 6px 9px;

  border: 1px solid ${({ theme }) => theme.Colors.Primary};

  ${({ theme }) => theme.RoundStyles.rounded}
`;

export const IconBox = styled.div`
  width: 50px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export const InputText = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;

  ${({ theme }) => theme.TextStyles.Paragraph1};

  ::placeholder {
    color: ${({ theme }) => theme.Colors.Gray6};
  }
`;
