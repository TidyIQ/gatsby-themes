/**
 * Deep merge user's state config with the default state config
 */

import deepmerge from "deepmerge";
import defaultState, { ProgressState } from "./default";
import userState from "./user";

const initialState = deepmerge<ProgressState>(defaultState, userState);

export default initialState;
