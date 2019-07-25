/**
 * Deep merge user's muiTheme with the default muiTheme
 */

import deepmerge from "deepmerge";
import defaultMuiTheme from "./default";
import userMuiTheme from "./user";

const muiTheme = deepmerge(defaultMuiTheme, userMuiTheme);

export default muiTheme;
