/**
 * Deep merge user's theme config with the default theme config
 */

import deepmerge from "deepmerge";
import defaultConfig from "./default";
import userConfig from "./user";

const themeConfig = deepmerge(defaultConfig, userConfig);

export default themeConfig;
