import React from 'react';

import { storiesOf } from '@storybook/react';




import Button from '@material-ui/core/Button';

import { muiTheme } from '../src';

import { overridings as theme1 } from './.themes/customTheme1';
import { overridings as theme2 } from './.themes/customTheme2';
import { overridings as theme3 } from './.themes/customTheme3';
import { overridings as theme4 } from './.themes/customTheme4';
import { overridings as theme5 } from './.themes/customTheme5';




const buttonStyle = {
  margin: 16
};


storiesOf('Material Custom theme', module)
  .addDecorator(muiTheme([theme1, theme2, theme3]))
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
  .addDecorator(muiTheme([theme4, theme5]))
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
