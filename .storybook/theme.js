const colors = {
  bgGrey: '#e5e7e6',
  white: '#ffffff',
  whiteTransparent: 'rgba(255, 255, 255, 0.5)',
  blackTransparent: 'hsla(0, 0%, 0%, 0.5)',
  textRed: '#d2093b',
  textBlack: '#252525',
  textGray: '#c2c8cb',
  textBlue: '#044e7c',
  textGold: '#ac924d',
  disabledRed: '#e0a8b4',
  blueGrey: '#425550',
  warmGrey: '#8b8b6b',
  darkRed: '#9c0935',
};

const media = {
  md: '@media (max-width: 767px)',
  sm: '@media (max-width: 499px)',
};

export const theme = {
  palette: {
    colors,
  },
  media,
};

export const themeAlt = {
  ...theme,
  palette: {
    colors: {
      ...theme.palette.colors,
      textRed: 'orange',
    },
  },
};

export const darkTheme = {
  ...colors,
  bgGrey: '#888888',
  white: '#222222',
  textRed: '#Fd1500',
};
