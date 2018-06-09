import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';

import { muiTheme } from '../src';

import Card from './CardExampleControlled';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Material Default theme', module)
  .addDecorator(muiTheme())
  .add('Flat buttons', () => (
    <div>
      <Button color="primary">Flat primary</Button>
      <Button color="secondary">Flat secondary</Button>
      <Button>Flat default</Button>
    </div>
  ))
  .add('Raised buttons', () => (
    <div>
      <Button variant="raised" color="primary">Raised primary</Button>
      <Button variant="raised" color="secondary">Raised secondary</Button>
      <Button variant="raised">Raised default</Button>
    </div>
  ));

const primaryPurple = purple[500]; // #F44336
const accentPurple = purple.A200; // #E040FB
const darkPurple = purple[900]; // #F44336
const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: accentGreen,
            main: primaryGreen,
            dark: darkGreen,
            contrastText: '#fff',
        },
        secondary: {
            light: accentPurple,
            main: primaryPurple,
            dark: darkPurple,
            contrastText: '#fff',
        },
    },
});

storiesOf('Material Custom theme', module)
  .addDecorator(muiTheme(customTheme))
  .add(' Raised buttons', () => (
    <div>
      <Button variant="raised" color="primary">Raised primary</Button>
      <Button variant="raised" color="secondary">Raised secondary</Button>
      <Button variant="raised">Raised default</Button>
    </div>
  ))
  ;
