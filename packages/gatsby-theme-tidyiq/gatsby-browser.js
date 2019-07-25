/* eslint-disable import/prefer-default-export, react/jsx-filename-extension, import/no-unresolved */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import ContextProvider from "./src/_config/context";

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
);
