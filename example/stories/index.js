import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';

import { muiTheme } from './../../src/';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

import greyTheme from './greyTheme.json';

const newTheme = {
    themeName: 'New Theme',
    themeFile: 'greyTheme.json',
    palette: {
        primary1Color: '#00bcd4',
        primary2Color: '#26a69a',
        alternateTextColor: '#4a4a4a',
        canvasColor: '#616161',
        textColor: '#bdbdbd',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme([newTheme]));
 */

storiesOf('Material-UI', module)
    .addDecorator(muiTheme([greyTheme, newTheme]))
    .add('Card Example Controlled', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <CardExampleControlled />
        </div>
      </div>))
    .add('Raised Button Example Simple', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <RaisedButtonExampleSimple />
        </div>
      </div>))
    .add('Date Picker Example Simple', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <DatePickerExampleSimple />
        </div>
      </div>));

storiesOf('Without addon', module)
//    .addDecorator(muiTheme())
    .add('Text', () => (
      <p>Lorem ipsum</p>
    ));
