import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Button from 'material-ui/Button';

import { muiTheme } from '../src';

import Card from './CardExampleControlled.jsx';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Material', module)
  .addDecorator(muiTheme())
  .add('Flat buttons', () => 
      <div>
        <Button color="primary">Raised</Button>
        <Button color="accent">Raised</Button>
        <Button>Raised</Button>
      </div>
  )
  .add('Raised buttons', () => 
      <div>
        <Button raised color="primary">Raised</Button>
        <Button raised color="accent">Raised</Button>
        <Button raised color="contrast">Raised</Button>
      </div>
  )
