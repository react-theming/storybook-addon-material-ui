import React from 'react';
import { register, Layout, Block } from '@storybook/addon-devkit';

import { getTheme, getThemeInfoList } from '../selectors';
import SelectTheme from './components/SelectTheme';
import ThemeBrowser from './components/ThemeBrowser';

import '../config';

const AddonThemingPanel = ({ theme, themeInfoList, setCurrent, isFirstDataReceived }) =>
  isFirstDataReceived ? (
    <Layout name="adk-tmp">
      <SelectTheme themeInfoList={themeInfoList} setCurrent={setCurrent} />
      <ThemeBrowser theme={theme} />
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
