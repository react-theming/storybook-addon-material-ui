import { styled } from '@storybook/theming';

export const Container = styled.div`
  background-color: ${({ theme, footer }) =>
    footer ? '#f3f3f3' : theme.background.app};

  padding: ${({ footer }) => (footer ? '6px 8px' : '4px 8px')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
