import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';

import { muiTheme } from './../../src/';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

import greyTheme from './greyTheme.json';
import SupportProject from '../SupportProject.jsx';
import MaterialAppExampleCard from '../LoremMaterial/blankMaterialAppExampleCard.jsx';
import MaterialAppExampleProgress from '../LoremMaterial/blankMaterialAppExampleProgress.jsx';
import MaterialAirlineBooking from '../LoremMaterial/MaterialAirlineBooking.jsx';

const SHOW_SUPPORT = true;

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

storiesOf('Material-UI', module)
    .addDecorator((story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          {story()}
          {SHOW_SUPPORT ? <SupportProject /> : null}
        </div>
      </div>
    ))
    .addDecorator(muiTheme(['Light Theme', 'Dark Theme', greyTheme]))
    .add('Card Example Controlled', () => (
      <CardExampleControlled />
    ))
    .add('Raised Button Example Simple', () => (
      <RaisedButtonExampleSimple />
    ))
    .add('Date Picker Example Simple', () => (
      <DatePickerExampleSimple />
    ));

storiesOf('Material App', module)
    .addDecorator(muiTheme(['Light Theme', 'Dark Theme', greyTheme]))
    .add('Hactoberfest issues:', () => (
      <MaterialAppExampleCard />
    ))
    .add('blank page', () => (
      <MaterialAppExampleProgress />
    ))
    .add('Airline booking', () => (
      <MaterialAirlineBooking />
    ));

storiesOf('Without addon', module)
    .add('Text', () => (
      <p>Lorem ipsum</p>
    ));
