import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.colors.accent1};
  border: 1px solid gray;
  padding: 4px 16px;
  margin: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.colors.accent2};
`;
