import React from 'react';

import { storiesOf } from '@storybook/react';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';

import { muiTheme } from '../src';

const primaryPurple = purple[500]; // #F44336
const accentPurple = purple.A200; // #E040FB
const darkPurple = purple[900]; // #F44336
const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];

const buttonStyle = {
  margin: 16,
};

const customTheme1 = createMuiTheme({
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
  themeName: 'Custom Light Theme',
});

const customTheme2 = createMuiTheme({
  palette: {
    primary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff',
    },
    type: 'dark',
  },
  secondary: {
    light: accentGreen,
    main: primaryGreen,
    dark: darkGreen,
    contrastText: '#fff',
  },
  themeName: 'Custom Dark Theme',
});

const customTheme3 = createMuiTheme({
  palette: {
    primary: {
      light: accentPurple,
      main: blue[200],
      dark: darkPurple,
      contrastText: '#fff',
    },
    secondary: {
      light: accentGreen,
      main: blue[400],
      dark: darkGreen,
      contrastText: '#fff',
    },
    type: 'dark',
  },
  themeName: 'Pale Blue Theme',
});

const yellowRedTheme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000',
    },
    secondary: {
      main: red[500],
      contrastText: '#fff',
    },
    type: 'dark',
  },
  themeName: 'Yellow and Red Theme',
});

const yellowBlueTheme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000',
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff',
    },
    type: 'dark',
  },
  themeName: 'Yellow and Blue Theme',
});

storiesOf('Material Custom theme', module)
  .addDecorator(
    muiTheme([customTheme1, customTheme2, customTheme3, yellowBlueTheme, yellowRedTheme]),
  )
  .add(' Raised buttons', () => (
    <div>
      <Button variant="raised" color="primary" style={buttonStyle}>
        Raised primary
      </Button>
      <Button variant="raised" color="secondary" style={buttonStyle}>
        Raised secondary
      </Button>
      <Button variant="raised" style={buttonStyle}>
        Raised default
      </Button>
    </div>
  ));

storiesOf('Clone Custom theme', module)
  .addDecorator(
    muiTheme([customTheme1, customTheme2, customTheme3, yellowBlueTheme, yellowRedTheme]),
  )
  .add(' Raised buttons', () => (
    <div>
      <Button variant="raised" color="primary" style={buttonStyle}>
        Raised primary
      </Button>
      <Button variant="raised" color="secondary" style={buttonStyle}>
        Raised secondary
      </Button>
      <Button variant="raised" style={buttonStyle}>
        Raised default
      </Button>
    </div>
  ));
