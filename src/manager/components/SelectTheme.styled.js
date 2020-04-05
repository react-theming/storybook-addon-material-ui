import { styled } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';
import { createSwatch } from '@react-theming/theme-swatch';

export const Swatch = createSwatch(styled);

export const Container = styled(Block)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const ListHolder = styled.div`
  padding: ${({ theme }) => theme.layoutMargin}px;
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
  flex-direction: ${({ single }) => (single ? 'column' : 'row')};
  justify-content: flex-start;
  align-items: center;
`;

export const AvatarHolder = styled.div`
  position: relative;
  width: ${({ single }) => (single ? '150px' : '36px')};
  height: ${({ single }) => (single ? '150px' : '36px')};
  margin: 16px;
`;

export const ThemeAvatar = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h4`
  margin-left: 6px;
  font-size: ${({ single }) => (single ? '32px' : '16px')};
  font-weight: ${({ single }) => (single ? 'bold' : 'normal')};
`;
