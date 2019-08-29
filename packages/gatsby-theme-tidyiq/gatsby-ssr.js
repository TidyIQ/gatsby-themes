/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import AppProvider from "./src/AppProvider";

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
