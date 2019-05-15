import React from 'react';
import { register, Layout, Block } from '@storybook/addon-devkit';
import { getTheme, getThemeNames } from '../selectors';
import '../config';

const Panel = ({ theme, names, setCurrent }) => (
  <Layout name="adk-tmp">
    <Block size={300}>
      {names.map((name, ind) => (
        <div key={name} onClick={() => setCurrent(ind)}>
          {name}
        </div>
      ))}
    </Block>
    <Block>
      <h1>Current Theme</h1>
      <p>{JSON.stringify(theme)}</p>
      <hr />
    </Block>
  </Layout>
);

register(
  {
    names: getThemeNames,
    theme: getTheme,
  },
  ({ global }) => ({
    setCurrent: global((store, ind) => ({
      ...store,
      currentTheme: ind,
    })),
  })
)(Panel);

export const AAA = '123';
