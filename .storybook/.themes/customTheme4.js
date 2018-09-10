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
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: red[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Red Theme'
};

export default createMuiTheme(overridings);
