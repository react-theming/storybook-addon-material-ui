import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';

const DecoratorUI = (ThemeProvider) => ({
  context,
  getStory,
  theme,
  isFirstDataReceived,
}) =>
  isFirstDataReceived ? (
    <ThemeProvider theme={theme}>{getStory(context)}</ThemeProvider>
  ) : (
    <p>no theme</p>
  );

const withData = (ThemeProvider, { providerFn }) => {
  let CurrentThemeProvider = ThemeProvider;
  if (providerFn) {
    CurrentThemeProvider = ({ theme, children }) => (
      <>{providerFn({ theme, children })}</>
    );
  }
  return createDecorator({
    theme: (store) => store.themesList[store.currentTheme],
  })(DecoratorUI(CurrentThemeProvider), { isGlobal: true });
};

export const withThemes = (ThemeProvider, themesList, { providerFn } = {}) =>
  withData(ThemeProvider, { providerFn })({
    themesList,
    currentTheme: 0,
  });

export const toThemes = setParameters();

export const useThemes = (...args) => {
  addDecorator(withThemes(...args));
  return toThemes;
};
