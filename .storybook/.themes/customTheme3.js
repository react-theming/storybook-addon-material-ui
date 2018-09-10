import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  palette: {
    primary: {
      light: accentPurple,
      main: blue[200],
      dark: darkPurple,
      contrastText: '#fff'
    },
    secondary: {
      light: accentGreen,
      main: blue[400],
      dark: darkGreen,
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Pale Blue Theme'
};

export default createMuiTheme(overridings);
