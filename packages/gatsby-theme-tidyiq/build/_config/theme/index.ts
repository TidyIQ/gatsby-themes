/**
 * Create MUI theme with responsive font sizes
 *
 * See: https://material-ui.com/customization/themes/#createmuitheme-options-theme
 * See: https://material-ui.com/customization/themes/#responsivefontsizes-theme-options-theme
 */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import muiTheme from "./muiTheme";

const theme = responsiveFontSizes(createMuiTheme(muiTheme));

export default theme;
