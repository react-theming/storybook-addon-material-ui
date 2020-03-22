import { styled } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';
import { createSwatch } from '@react-theming/theme-swatch';

export const Swatch = createSwatch(styled);

export const Container = styled(Block)`
  padding: ${({ theme }) => theme.layoutMargin}px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const Theme = styled.button`
  border: 1px solid ${({ theme }) => theme.background.app};
  ${({ current, theme }) =>
    current ? `border-color: ${theme.color.secondary};` : null}
  border-radius: ${({ theme }) => theme.appBorderRadius}px;
  background-color: ${({ theme }) => theme.background.app};
  margin: ${({ theme }) => Math.floor(theme.layoutMargin / 2)}px 0px;
  padding: 0px;
  width: 100%;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.appBorderColor};
  }

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ThemeAvatar = styled.div`
  width: 36px;
  height: 36px;
`;

export const Title = styled.h4`
  margin-left: 6px;
  font-size: 16px;
`;
