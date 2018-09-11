import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';


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
