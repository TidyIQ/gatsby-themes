/**
 * Define initial state for progress
 */

import { State } from "@tidyiq/gatsby-theme-tidyiq/src";

const initialProgressState: State["progress"] = {
  test: {
    error: {
      description: "",
      message: ""
    },
    status: "waiting"
  }
};

export default initialProgressState;
