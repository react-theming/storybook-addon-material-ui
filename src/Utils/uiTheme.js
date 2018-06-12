const uiThemeLight = {
    palette: {
        borderColor: '#e0e0e0',
        textColor: 'rgba(0, 0, 0, 0.87)',
        secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
        inputTextColor: 'rgb(46, 84, 128)',
        canvas: '#ffffff',
    },
};

const currentTheme = {
    theme: uiThemeLight,
};

export default function getCurrentTheme() {
    return currentTheme.theme;
}
