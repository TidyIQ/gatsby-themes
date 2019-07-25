/**
 * Redux
 */

import { configureStore } from "redux-starter-kit";
import progress from "./progress";

/**
 * Reducers
 *
 * See: https://redux-starter-kit.js.org/api/configurestore#reducer
 */

const reducer = {
  progress
};

/**
 * Create store
 *
 * See: https://redux-starter-kit.js.org/usage/usage-guide#store-setup
 */

const store = configureStore({
  reducer
});

export default store;
