import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme";
import { darken } from "@material-ui/core/styles";
import themeConfig from "../config";

/**
 * Update 'createMuiTheme' module type definitions to allow for custom variables
 *
 * See: https://material-ui.com/customization/themes/#custom-variables
 */

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    background: {
      vibrant: {
        primary: string;
        secondary: string;
      };
    };
    brandPalette: {
      facebook: string;
      google: string;
      twitter: string;
    };
    statusPalette: {
      error: {
        main: string;
        dark: string;
      };
      info: {
        main: string;
        dark: string;
      };
      success: {
        main: string;
        dark: string;
      };
      warning: {
        main: string;
        dark: string;
      };
    };
  }
  interface ThemeOptions {
    background?: {
      vibrant?: {
        primary?: string;
        secondary?: string;
      };
    };
    brandPalette?: {
      facebook?: string;
      google?: string;
      twitter?: string;
    };
    statusPalette?: {
      error?: {
        main: string;
        dark: string;
      };
      info?: {
        main: string;
        dark: string;
      };
      success?: {
        main: string;
        dark: string;
      };
      warning?: {
        main: string;
        dark: string;
      };
    };
  }
}

/**
 * Create MUI theme object
 *
 * See: https://material-ui.com/customization/themes/#createmuitheme-options-theme
 */

const { fontFamily, palette } = themeConfig;
const tonalOffset = 0.2;

const muiTheme = createMuiTheme();

const defaultMuiTheme: ThemeOptions = {
  background: {
    vibrant: {
      primary: palette.primary,
      secondary: palette.secondary
    }
  },
  brandPalette: {
    facebook: "#3b5998",
    google: "#ffffff",
    twitter: "#1da1f2"
  },
  overrides: {
    MuiFilledInput: {
      adornedEnd: {
        paddingRight: 8 /* End adornment padding should be 8px, not 12px, according to MUI specs */
      }
    },
    MuiInputAdornment: {
      filled: {
        "&$positionStart": {
          marginTop: 0 /* Remove margin top so icon is center aligned */
        }
      }
    },
    MuiInputLabel: {
      animated: {
        transition: muiTheme.transitions.create(
          /* Add transition to margins to ensure smooth animation for inputs with start adornments */
          ["color", "transform", "margin"],
          {
            duration: muiTheme.transitions.duration.shorter,
            easing: muiTheme.transitions.easing.easeOut
          }
        )
      }
    },
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: 8 /* End adornment padding should be 8px, not 14px, according to MUI specs */
      }
    }
  },
  palette: {
    primary: {
      main: palette.primary
    },
    secondary: {
      main: palette.secondary
    }
  },
  statusPalette: {
    error: {
      main: palette.status.error,
      dark: darken(palette.status.error, tonalOffset * 1.5)
    },
    info: {
      main: palette.status.info,
      dark: darken(palette.status.info, tonalOffset * 1.5)
    },
    success: {
      main: palette.status.success,
      dark: darken(palette.status.success, tonalOffset * 1.5)
    },
    warning: {
      main: palette.status.warning,
      dark: darken(palette.status.warning, tonalOffset * 1.5)
    }
  },
  typography: {
    fontFamily: fontFamily.body
  }
};

export default defaultMuiTheme;
