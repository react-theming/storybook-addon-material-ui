import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

const darkGreen = green[900];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentPurple,
      main: blue[200],
      dark: darkPurple,
    },
    secondary: {
      main: darkGreen,
    },
    type: 'dark'
  },
  themeName: 'Pale Blue Theme'
};

export default createMuiTheme(overridings);
