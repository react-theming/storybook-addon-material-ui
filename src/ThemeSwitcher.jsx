import React, { Component } from 'react';
import ThemeProvider from 'react-theme-provider';
import setCSS from './.themes/setCSS';

const reqThemes = require.context('./.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

const propTypes = {
    themes: React.PropTypes.array.requied,
    children: React.PropTypes.element,
};

const defaultProps = {
    themes: themesList,
};

class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTheme: 0,
        };

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(event) {
        this.setState({ selectedTheme: parseInt(event.target.value, 10) });
    }

    render() {
        return (
          <div>
            <select
              name="theme-switcher"
              id="theme-switcher"
              value={this.state.selectedTheme}
              onChange={this.onSelect}
              style={{ margin: 4 }}
            >
              <option value={0} >Theme 1</option>
              <option value={1} >Theme 2</option>
              <option value={2} >Theme 3</option>
            </select>
            <ThemeProvider
              themes={this.props.themes}
              themeInd={this.state.selectedTheme}
              setCSS={setCSS}
            >
              <div>
                {this.props.children}
              </div>
            </ThemeProvider>
          </div>
        );
    }
}

ThemeSwitcher.propTypes = propTypes;
ThemeSwitcher.defaultProps = defaultProps;

export default ThemeSwitcher;
