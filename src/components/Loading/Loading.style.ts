import styled from "styled-components";

export const LoadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min(90vh, 800px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: translateY(-10%);
  overflow-y: hidden;
`;

export const IconBox = styled.div`
  width: 116px;
  height: 134px;
`;
