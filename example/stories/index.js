import React from 'react';
import { storiesOf, action, setAddon, addDecorator } from '@kadira/storybook';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();


// import {MuiTheme} from './react-storybook-decorator-material-ui/MuiTheme.jsx';
import {muiTheme} from './../../src/';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';


const newTheme = {
    themeName: 'Grey Theme',
    themeFunc: (x) => x.palette.text1,
    palette: {
        alternateTextColor: '#4a4a4a',
    },
};



storiesOf('Material-UI', module)
    .addDecorator(muiTheme([newTheme]))
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
    .add('Text', () =>(
        <p>Lorem ipsum</p>

))
