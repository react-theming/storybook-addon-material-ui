import { styled } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';

export const Container = styled(Block)`
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  height: auto;
  label: Container;
`;

export const ThemeHolder = styled.div`
  height: auto;
  overflow: auto;
  label: ThemeHolder;
`;
