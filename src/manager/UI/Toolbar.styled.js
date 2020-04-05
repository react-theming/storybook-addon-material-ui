import { styled } from '@storybook/theming';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.app};

  padding: 4px 8px;
  display: flex;
  flex-direction: row;
`;
