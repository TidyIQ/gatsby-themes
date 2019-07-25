/**
 * User MUI theme overrides
 *
 * Users may overwrite this with their own configuration using component shadowing (optional)
 *
 * See: https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing
 */

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

/**
 * Update 'createMuiTheme' module type definitions to allow for custom variables
 *
 * See: https://material-ui.com/customization/themes/#custom-variables
 */

declare module "@material-ui/core/styles/createMuiTheme" {}

/**
 * Create MUI theme object
 *
 * See: https://material-ui.com/customization/themes/#createmuitheme-options-theme
 */

const userMuiTheme: ThemeOptions = {};

export default userMuiTheme;
