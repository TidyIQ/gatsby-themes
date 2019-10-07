/**
 * Theme configuration
 *
 * See: https://github.com/TidyIQ/gatsby-theme-tidyiq#readme
 */

import { ThemeConfig, augmentColor } from "@tidyiq/components/dist";
import orange from "@material-ui/core/colors/orange";
import cyan from "@material-ui/core/colors/cyan";

const theme: ThemeConfig = {
  palette: {
    primary: augmentColor({
      light: cyan[50],
      main: cyan[500],
      dark: cyan[900],
      contrastText: "rgba(255,255,255,0.87)"
    }),
    secondary: augmentColor({
      main: orange[900]
    })
  },
  typography: {
    h1: {
      color: cyan[900],
      fontSize: "4.5rem",
      fontFamily:
        '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h2: {
      color: cyan[900],
      fontFamily:
        '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h3: {
      color: cyan[900],
      fontFamily:
        '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h4: {
      color: cyan[900],
      fontFamily:
        '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h5: {
      color: cyan[500],
      fontFamily:
        '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h6: {
      color: cyan[900],
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    body1: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    body2: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    button: {
      fontFamily:
        '"Quicksand", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    }
  }
};

export default theme;
