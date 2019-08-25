import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';

const DecoratorUI = ({ context, getStory, theme, isFirstDataReceived }) =>
  isFirstDataReceived ? (
    <div>
      Theme: {theme.name} <br />
      Theme: {JSON.stringify(theme)} <br />
      {getStory(context)}
    </div>
  ) : (
    <p>no data</p>
  );

const withData = createDecorator({
  theme: store => store.themesList[store.currentTheme],
})(DecoratorUI, { isGlobal: true });

export const withThemes = themesList =>
  withData({
    themesList,
    currentTheme: 0,
  });

export const toThemes = setParameters();

export const useThemes = themesList => {
  addDecorator(withThemes(themesList));
  return toThemes;
};
