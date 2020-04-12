import { styled } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';

export const Container = styled(Block)`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: auto;
  label: Container;
`;

export const PickerHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 50%, 0.35);
  height: 1px;
  flex-grow: 1;
`;
