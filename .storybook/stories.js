import React from 'react';

import { storiesOf } from '@storybook/react';
import { useThemes, createTheme } from '../src/index.js';

import { Button } from '@storybook/react/demo';

const setThemes = useThemes([
  createTheme({ blue: 'rgb(40, 60, 250)' }),
  createTheme({ blue: 'rgb(120, 40, 250)' }),
  createTheme({ blue: 'rgb(30, 30, 250)' }),
]);

storiesOf('Button', module)
  .add(
    'Buttons1',
    () => <Button>Hello Button</Button>,
    setThemes({ currentTheme: 2 })
  )
  .add(
    'Buttons2',
    () => <Button>Hello Button</Button>,
    setThemes({ currentTheme: 1 })
  )
  .add(
    'Buttons3',
    () => <Button>Hello Button</Button>,
    setThemes({ currentTheme: 0 })
  );
