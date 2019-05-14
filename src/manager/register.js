import React from 'react';
import { register } from '@storybook/addon-devkit';
import { getTheme, getThemeNames } from '../selectors'
import '../config';

const Panel = ({theme, names}) => (
  <div name="adk-tmp">
    <h1>Current Theme</h1>
    <p>{JSON.stringify(theme)}</p>
    <hr/>
  </div>
);

register({
  names: getThemeNames,
  theme: getTheme,
})(Panel);
