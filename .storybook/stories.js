import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';
import { useThemes, createTheme } from '../src/index.js';

import { Button } from './ui';
import { theme, themeAlt, darkTheme } from './theme';

const setThemes = useThemes(ThemeProvider, [
  theme,
  themeAlt,
  darkTheme,
]);

storiesOf('Button', module)
  .add(
    'Buttons1',
    () => <Button>Hello Button</Button>,
    // setThemes({ currentTheme: 4 }),
  )
  .add(
    'Buttons2',
    () => <Button>Hello Button</Button>,
    // setThemes({ currentTheme: 3 }),
  )
  .add(
    'Buttons3',
    () => <Button>Hello Button</Button>,
    // setThemes({ currentTheme: 0 }),
  );
