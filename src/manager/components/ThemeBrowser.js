import React from 'react';
import { Block } from '@storybook/addon-devkit';

const ThemeBrowser = ({ theme }) => (
  <Block>
    <h1>Current Theme</h1>
    <p>{JSON.stringify(theme)}</p>
    <hr />
  </Block>
);

export default ThemeBrowser;
