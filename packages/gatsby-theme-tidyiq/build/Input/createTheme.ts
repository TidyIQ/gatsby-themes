/**
 * Set theme primary color based on color prop and current status
 *
 * A <ThemeProvider> wraps the input component so that the color of the input (determined by theme's primary color) changes based on the current status
 */

import { Theme, createMuiTheme } from "@material-ui/core/styles";

type ColorProps = "default" | "primary" | "secondary";
export type StatusState = "default" | "valid" | "invalid";

/**
 * Get primary color to use for theme
 */

interface GetPrimaryColor {
  (color: ColorProps, theme: Theme): string;
}
const getPrimaryColor: GetPrimaryColor = (color, theme) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.secondary.main;
    case "default":
    default:
      return theme.statusPalette.info.main;
  }
};

/**
 *  Get palette primary color
 */

export interface GetErrorColor {
  (status: "valid" | "invalid", theme: Theme): string;
}

const getErrorColor: GetErrorColor = (status, theme) => {
  const errorColorPalette = {
    valid: theme.statusPalette.success.main,
    invalid: theme.statusPalette.error.main
  };
  return errorColorPalette[status];
};

/* Create theme */

interface CreatePalette {
  (color: ColorProps, status: StatusState, theme: Theme): Theme;
}

const createTheme: CreatePalette = (color, status, theme) => {
  const errorColor =
    status !== "default"
      ? getErrorColor(status, theme)
      : theme.palette.error.main;
  const primaryColor = getPrimaryColor(color, theme);
  return createMuiTheme({
    ...theme /* Nest from default theme */,
    palette: {
      primary: {
        main: primaryColor /* Set color based on status and color prop */
      },
      error: {
        main: errorColor
      }
    }
  });
};

export default createTheme;
