import { Theme, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
const theme: Theme = createTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

export default theme;
