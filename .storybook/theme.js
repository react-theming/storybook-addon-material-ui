const colors = {
  white: '#ffffff',
  whiteTransparent: 'rgba(255, 255, 255, 0.5)',
  blackTransparent: 'hsla(0, 0%, 0%, 0.5)',
  accent1: '#d2093b',
  accent2: '#252525',
  accent3: '#c2c8cb',
  accent4: '#044e7c',
  accent5: '#ac924d',
  accent6: '#e0a8b4',
  accent7: '#425550',
  accent8: '#8b8b6b',
  accent9: '#9c0935',
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
  ...theme,
  palette: {
    colors: {
      ...colors,
      bgGrey: '#888888',
      white: '#222222',
      textRed: '#Fd1500',
      accent1: '#32399b',
    },
  },
};
