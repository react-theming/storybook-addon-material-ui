/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { muiTheme } from 'storybook-addon-material-ui';

import Components from './ComponentsExample';
import Card from './CardExampleControlled';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('Material-UI', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '60%', maxWidth: 1000, minWidth: 600 }} >
              {storyKind}
            </div>
          </div>);
    })
    .addDecorator(muiTheme(themesList))
    .add('Components', () => {
        setOptions({
            name: 'storybook-addon material-ui',
            url: 'https://github.com/sm-react/storybook-addon-material-ui',
            goFullScreen: false,
            downPanelInRight: false,
        });
        return <Components />;
    })
    .add('Card', () => (
      <Card />
    ));
