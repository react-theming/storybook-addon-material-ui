import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';


export const overridings = {
  palette: {
    primary: {
      main: yellow[500],
      contrastText: '#000'
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff'
    },
    type: 'dark'
  },
  themeName: 'Yellow and Blue Theme'
};

export default createMuiTheme(overridings);
