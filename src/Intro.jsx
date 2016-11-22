/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */

import React from 'react';
import ThemeProvider from 'react-theme-provider';
import setCSS from './.themes/setCSS';

/*

const propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
};

const defaultProps = {
    title: 'Welcome to React-Theming',
    subtitle: 'Boilerplate Project',
};

const contextTypes = {
    muiTheme: React.PropTypes.object,
};
*/

class Intro extends React.Component {
    render() {
//        const { palette } = this.context.muiTheme;
//        const styleTitle = {
//            color: palette.alternateTextColor,
//        };
//        const styleSubtitle = {
//            color: palette.alternate1Color,
//        };
//        const styleHeader = {
//            backgroundColor: palette.alternateСanvasColor,
//        };
        return (
          <div className="App-intro" style={{ maxWidth: 1000, margin: '0 auto' }}>
            <ThemeProvider setCSS={setCSS} >
              <h1>Quick start</h1>

              <p>
                At the heart of this project the desire to collect the best practices of
                 application development
                 via <a href="https://github.com/storybooks/react-storybook">React-Storybook</a>
                 environment. This project is transparent and friendly for developers.
                 You do not need to eject anything. Therefore you can easily
                 add your own configuration and extend it using any packages.
              </p>
              <p>
                It contains the <span>fully-charged</span> setup of the Storybook
                with pre-installed <span>plugins</span>, configuration,
                quick examples, and tips.
              </p>

              <h2>Instal the project</h2>

              <code>
                  git clone https://github.com/sm-react/react-theming.git<br />
                  cd react-theming<br />
                  npm i<br />
                  npm start<br />
              </code>

              <p>Press <code>Ctrl-Shft-F</code> to exit from <code>Full screen</code> mode</p>

              <p>
                Let&apos;s select another theme for this page.
                Do it via dropdown list at the bottom panel.
                Out of the box there are three themes: &apos;Light&apos;,
                &apos;Dark&apos; and &apos;Gray&apos;. Check out them.
              </p>

              <p>
                  Okay, now let&apos;s look at the panel on the left.
                  In fact, our application consists of two components:
                  <code>src/Header.jsx</code> and <code>src/Intro.jsx</code>.
                  Selecting the appropriate items in the left-side list you switch to an
                  isolated view of the component. It&apos;s how <span>React Storybook</span>
                  works - allows you &apos;step-by-step&apos; to create and
                  works with React components.
                  You can improve the quality of development by applying different
                  addons to Storybook. Most of them is already pre-installed in this project.
                  You will find excellent <a href="https://getstorybook.io/docs/">
                  documentation and examples</a> on the React Storybook website.
                </p>


              <p>A short guide for other Storybook Addons will be here...</p>

              <h2>ThemeProvider:</h2>

              <code>&lt;ThemeProvider&gt;<br />
                {'\u00A0\u00A0'}&lt;YourThemedComponentOrPlainHTML /&gt;<br />
                &lt;/ThemeProvider&gt;</code>

              <p>A generic theme provider and (very) simple CSS styler</p>

              <h2>What is Theme?</h2>

              <p>It&apos;s just plain javascript object, typically with two levels of nesting.</p>

              <p>Primer:</p>

              <code>
                {'const greyTheme = {'}<br />
                {"\u00A0\u00A0themeName: 'Grey Theme',"}<br />
                {"\u00A0\u00A0themeFile: 'greyTheme.json',"}<br />
                {"\u00A0\u00A0palette: {"}<br />
                {"\u00A0\u00A0\u00A0\u00A0primary1Color: '#00bcd4',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0alternateTextColor: '#4a4a4a',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0canvasColor: '#616161',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0textColor: '#bdbdbd',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0secondaryTextColor: 'rgba(255, 255, 255, 0.54)',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0disabledColor: '#757575',"}<br />
                {"\u00A0\u00A0\u00A0\u00A0accent1Color: '#607d8b',"}<br />
                {"\u00A0\u00A0},"}<br />
                {"};"}<br />
              </code>

              <h2>What is CSSrule?</h2>

              <p>
                a string containing CSS rules. Typically it&apos;s a
                template string with passed theme props:
              </p>

              <code>
                {".themed div {"}<br />
                {"\u00A0\u00A0color: ${palette.textColor};"}<br />
                {"\u00A0\u00A0background-color: ${palette.canvasColor};"}<br />
                {"}"}<br />
                <br />
                {".themed a {"}<br />
                {"\u00A0\u00A0color: ${palette.primary1Color};"}<br />
                {"}"}<br />
              </code>

              <p>
                if you use it without any
                props <span>inside</span> the <span>MuiThemeProvider</span>,
                it will provide CSS style for your html elements based on the current theme
              </p>

              <p>
                if you use it without any
                props <span>outside</span> the <span>MuiThemeProvider</span>,
                it will provide CSS style for your html elements based on the
                default theme and pass this theme to your components
                via context same way as MuiThemeProvider.
              </p>
              <p>
                See project&apos;s <a href="https://github.com/sm-react/react-theme-provider">
                  repo
                </a>
              </p>
              <br />
              <br />

            </ThemeProvider>
          </div>
        );
    }
}

// Intro.propTypes = propTypes;
// Intro.defaultProps = defaultProps;
// Intro.contextTypes = contextTypes;

export default Intro;

