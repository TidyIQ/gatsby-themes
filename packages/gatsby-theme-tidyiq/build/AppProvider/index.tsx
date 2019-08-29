import React, { FC } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import TIQAppProvider from "@tidyiq/components/dist/AppProvider";
import userTheme from "../shadow/theme";

/**
 * Context providers that wrap the entire app for Gatsby. NoSsr required due to unknown build issue.
 *
 * @param children
 *
 * @see https://github.com/gatsbyjs/gatsby/issues/16075
 * @see https://material-ui.com/api/no-ssr/
 */
const AppProvider: FC = ({ children }) => {
  return (
    <TIQAppProvider theme={userTheme}>
      <NoSsr>{children}</NoSsr>
    </TIQAppProvider>
  );
};

export default AppProvider;
