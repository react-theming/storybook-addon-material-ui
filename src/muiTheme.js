import React from 'react';
import addons from '@storybook/addons';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { EVENT_ID_INIT } from './';

const lightBaseTheme = createMuiTheme();
const darkBaseTheme = createMuiTheme({
    palette: createPalette({
        type: 'dark',
    }),
});

lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

const previewStyle = (color) => ({
    backgroundColor: color,
    width: '100%',
    height: '100%',
    minHeight: 600,
})



export function muiTheme(...themes) {
    const theme = themes[0];
    let currentTheme = lightBaseTheme;
    if (theme === 'dark') {
        currentTheme = darkBaseTheme;
    }
    if (typeof theme === 'object') {
        currentTheme = theme;
    }

    const backgroundColor = currentTheme.palette.type === 'dark' ? 'rgb(50,50,50)' : 'white';
    console.log(currentTheme);
    return (storyFn, context) => 
        <div style={previewStyle(backgroundColor)}>
            <MuiThemeProvider theme={lightBaseTheme}>
            {storyFn(context)}
            </MuiThemeProvider>
        </div>
}
