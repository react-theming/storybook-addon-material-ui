import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf, addDecorator } from '@kadira/storybook';

import { muiTheme } from './../../src/';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

import greyTheme from './greyTheme.json';
import SupportProject from '../SupportProject.jsx';
import MaterialAppExampleCard from '../LoremMaterial/blankMaterialAppExampleCard.jsx';
import MaterialAppExampleProgress from '../LoremMaterial/blankMaterialAppExampleProgress.jsx';
import MaterialAirlineBooking from '../LoremMaterial/MaterialAirlineBooking.jsx';
import MaterialConversationChat from '../LoremMaterial/MaterialConversationChat.jsx';
import MaterialStepper from '../LoremMaterial/MaterialStepper.jsx';
import MaterialContactList from '../LoremMaterial/MaterialContactList.jsx';
import MaterialLoginPage from '../LoremMaterial/MaterialLoginPage.jsx';
import LoginPage from '../LoremMaterial/LoginPage.jsx';


const SHOW_SUPPORT = true;

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

addDecorator(muiTheme([
    'Light Theme',
    'Dark Theme',
    greyTheme,
]));


storiesOf('Material-UI', module)
    .addDecorator((story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          {story()}
          {SHOW_SUPPORT ? <SupportProject /> : null}
        </div>
      </div>
    ))
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
    .add('Airline Booking', () => (
      <MaterialAirlineBooking />
    ))
    .add('Contact List', () => (
      <MaterialContactList />
    ))
    .add('Sign In page', () => (
      <LoginPage />
    ))
    .add('Stepper', () => (
      <MaterialStepper />
    ))
    .add('Login page', () => (
      <MaterialLoginPage />
    ))
    .add('Material Conversation Chat', () => (
      <MaterialConversationChat />
    ))
    .add('blank page', () => (
      <MaterialAppExampleProgress />
    ))
    .add('Description:', () => (
      <MaterialAppExampleCard />
    ));


function ReactTemesProvider(props, context) {
    const { palette } = context.muiTheme;
    const themeProps = {
        style: { color: palette.textColor },
    };
    return (
      <div {...themeProps} >
        {props.children}
      </div>
    );
}
ReactTemesProvider.propTypes = {
    children: PropTypes.element,
};
ReactTemesProvider.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

