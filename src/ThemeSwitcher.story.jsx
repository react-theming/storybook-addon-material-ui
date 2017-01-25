/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

import ThemeSwitcher from './ThemeSwitcher';
import App from './App';

storiesOf('Theme Switcher', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', /* maxWidth: 500,*/ minWidth: 200 }}>
              {storyKind}
            </div>
          </div>);
    })
    .add('Component', () => {
        setOptions({
            name: 'React Theme Provider',
            url: 'https://github.com/sm-react/react-theme-provider',
        });
        return (<ThemeSwitcher><div><PlainHTML /></div></ThemeSwitcher>);
    })
    .add('Themed App', () => (
      <ThemeSwitcher>
        <div>
          <App />
        </div>
      </ThemeSwitcher>
    ));


function PlainHTML({ themes, themeInd, override }) {
    const tab = '\u00A0\u00A0\u00A0\u00A0';
    return (
      <div style={{ padding: 16 }}>
      The plain HTML example <br /><br />
        {'<ThemeProvider'} {!(themes && themeInd && override) ? '>' : ''} <br />
        {override ? <div>
          {`${tab}override`}
          <br />
        </div> : '' }
        {themes ? <div>
          {`${tab}themes={[greyTheme, altTheme]}`}
          <br />
        </div> : '' }
        {themeInd ? <div>
          {`${tab}themeInd={${themeInd}}`}
          <br />
          {(themes || themeInd || override) ? '>' : ''}
        </div> : '' }
        {`${tab}<div>`} <br />
        <div style={{ paddingLeft: 32 }}>
          {'Here we have some text with styled '}
          <a href="https://github.com/sm-react/storybook-addon-material-ui">
            {'<a href="storybook-addon-material-ui"> links</a>'}
          </a>
          {', and highlighted via'}
          <span> {'<span> tags </span>'} </span>
          {'tag. '}
          {'You can select it and see the custom selection color!. Try it with different themes'}
          <br />
        </div>
        {`${tab}<div>`} <br />
        {'<ThemeProvider>'} <br />

      </div>
    );
}

PlainHTML.propTypes = {
    themes: React.PropTypes.bool,
    themeInd: React.PropTypes.bool,
    override: React.PropTypes.bool,
};
