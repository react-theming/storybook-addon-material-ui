import React from 'react';
import { themeName } from '@react-theming/theme-name';

import { styled } from '@storybook/theming';

export const createSelector = (...args) => {
  const resultFn = args.pop();
  return store => {
    const selected = args.map(selector => selector(store));
    return resultFn(...selected);
  };
};

export const getCurrentInd = store => store.currentTheme;
export const getThemesList = store => store.themesList;

export const getTheme = createSelector(
  getCurrentInd,
  getThemesList,
  (ind, themes) => themes[ind]
);

export const getThemeInfoList = createSelector(
  getThemesList,
  list =>
    list.map(theme => ({
      name: themeName(theme),
      theme,
    }))
);
