import React from 'react';
import addons from '@storybook/addons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { EVENT_ID_INIT } from './';

const lightBaseTheme = createMuiTheme();
const darkBaseTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

const previewStyle = color => ({
    backgroundColor: color,
    width: '100%',
    height: '100%',
    minHeight: 600,
});

export default function muiTheme(...themes) {
    const theme = themes[0];
    let currentTheme = lightBaseTheme;
    if (theme === 'dark') {
        currentTheme = darkBaseTheme;
    }
    if (typeof theme === 'object') {
        currentTheme = theme;
    }

    return (storyFn, context) =>
      <div style={previewStyle()}>
        <MuiThemeProvider theme={currentTheme}>
          {storyFn(context)}
        </MuiThemeProvider>
      </div>;
}
