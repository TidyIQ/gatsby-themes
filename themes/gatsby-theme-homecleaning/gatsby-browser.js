/* eslint-disable import/prefer-default-export, react/jsx-filename-extension, @typescript-eslint/explicit-function-return-type */

import React from "react";
import AppProvider from "./src/components/AppProvider";

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
export const wrapPageElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
