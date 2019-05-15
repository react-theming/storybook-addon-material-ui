import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';

const DecoratorUI = ({ context, getStory, theme }) => (
  <div>
    Theme: {theme.name} <br />
    {getStory(context)}
  </div>
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
  addDecorator(withThemes(themesList))
  return toThemes
}
