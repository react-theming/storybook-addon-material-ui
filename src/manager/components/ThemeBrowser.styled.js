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
  flex-grow: 1;
  label: ThemeHolder;
`;

const copyIcon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0eiIvPjwvc3ZnPg=';

export const Copy = styled.button`
  background-color: unset;
  border: none;
  background: url(${copyIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 35px;
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

export const SelectedCard = styled.div`
  background-color: #f6f9fc;
  padding: 12px;
  margin-top: 4px;
  font-size: 16px;
`;
