/**
 * Default theme configuration
 */

import { CSSProperties } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import red from "@material-ui/core/colors/red";
import { RecursiveNonNullable } from "../../utils/typescript";

export type DefaultThemeConfig = RecursiveNonNullable<{
  palette: {
    primary: CSSProperties["color"];
    secondary: CSSProperties["color"];
    status: {
      error: CSSProperties["color"];
      info: CSSProperties["color"];
      success: CSSProperties["color"];
      warning: CSSProperties["color"];
    };
  };
  fontFamily: {
    body: CSSProperties["fontFamily"];
  };
}>;

const defaultTheme: DefaultThemeConfig = {
  palette: {
    primary: blue[700],
    secondary: green[800],
    status: {
      error: red[500],
      info: blue[500],
      success: green[500],
      warning: amber[500]
    }
  },
  fontFamily: {
    body: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
  }
};

export default defaultTheme;
