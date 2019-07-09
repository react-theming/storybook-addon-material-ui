import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '@material-ui/core/Button';

import { muiTheme } from '../src';

import { overridings as theme1 } from './.themes/customTheme1';
import { overridings as theme2 } from './.themes/customTheme2';
import themeF3, { overridings as theme3 } from './.themes/customTheme3';
import { overridings as theme4 } from './.themes/customTheme4';
import { overridings as theme5 } from './.themes/customTheme5';

const buttonStyle = {
  margin: 16
};

storiesOf('Material Custom theme', module)
  .addParameters({
    backgrounds: [
      { name: 'init', value: '#FFFFFF' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' }
    ]
  })
  .addDecorator(muiTheme([theme1, theme2, theme3, theme4, theme5]))
  .add('Raised buttons', () => (
    <div>
      <Button variant="contained" color="primary" style={buttonStyle}>
        Raised primary
      </Button>
      <Button variant="contained" color="secondary" style={buttonStyle}>
        Raised secondary
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Raised default
      </Button>
    </div>
  ))
  .add('Outlined buttons', () => (
    <div>
      <Button variant="outlined" color="primary" style={buttonStyle}>
        Outlined primary
      </Button>
      <Button variant="outlined" color="secondary" style={buttonStyle}>
        Outlined secondary
      </Button>
      <Button variant="outlined" style={buttonStyle}>
        Outlined default
      </Button>
    </div>
  ))
  .add('Flat buttons', () => (
    <div>
      <Button variant="flat" color="primary" style={buttonStyle}>
        Flat primary
      </Button>
      <Button variant="flat" color="secondary" style={buttonStyle}>
        Flat secondary
      </Button>
      <Button variant="flat" style={buttonStyle}>
        Flat default
      </Button>
    </div>
  ));

storiesOf('Clone Custom theme', module)
  // .addDecorator(muiTheme([theme4, theme5]))
  .add(' Raised buttons', () => (
    <div>
      <Button variant="contained" color="primary" style={buttonStyle}>
        Raised primary
      </Button>
      <Button variant="contained" color="secondary" style={buttonStyle}>
        Raised secondary
      </Button>
      <Button variant="contained" style={buttonStyle}>
        Raised default
      </Button>
    </div>
  ));
