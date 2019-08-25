import React from 'react';
import { register, Layout, Block } from '@storybook/addon-devkit';


import { getTheme, getThemeInfoList } from '../selectors';
import SelectTheme from './components/SelectTheme';

import '../config';

const AddonThemingPanel = ({ theme, themeInfoList, setCurrent, isFirstDataReceived }) =>
  isFirstDataReceived ? (
    <Layout name="adk-tmp">
      <SelectTheme themeInfoList={themeInfoList} setCurrent={setCurrent} />
      <Block>
        <h1>Current Theme</h1>
        <p>{JSON.stringify(theme)}</p>
        <hr />
      </Block>
    </Layout>
  ) : (
    <p>Waiting for data</p>
  );

register(
  {
    themeInfoList: getThemeInfoList,
    theme: getTheme,
  },
  ({ global }) => ({
    setCurrent: global((store, ind) => ({
      ...store,
      currentTheme: ind,
    })),
  })
)(AddonThemingPanel);

export const AAA = '123';
