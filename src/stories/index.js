/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';

import App from '../App';
import Header from '../Header';
import Intro from '../Intro';
import '../App.css';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

storiesOf('React App', module)
    .addDecorator(story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', /* maxWidth: 500,*/ minWidth: 200 }}>
          {story()}
          {/* SHOW_SUPPORT ? <SupportProject /> : null*/}
        </div>
      </div>
    ))
    .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
    .add('App', () => (
      <App />
    ))
    .add('App-header', () => (
      <Header />
    ))
    .add('App-intro', () => (
      <Intro />
    ));
