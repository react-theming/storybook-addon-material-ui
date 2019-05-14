import React from 'react';

import { storiesOf } from '@storybook/react';
import { useThemes } from '../src/index.js'

import { Button } from '@storybook/react/demo';

const setThemes = useThemes(['aaa', 'bbb', 'cccc'])


storiesOf('Button', module)
  .add('Buttons1', () => <Button>Hello Button</Button>, setThemes({currentTheme: 2}))
  .add('Buttons2', () => <Button>Hello Button</Button>, setThemes({currentTheme: 1}))
  .add('Buttons3', () => <Button>Hello Button</Button>, setThemes({currentTheme: 0}))
