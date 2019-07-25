/**
 * Context providers that will wrap the entire app
 *
 * See: Redux - https://react-redux.js.org/api/provider
 * See: Material UI - https://material-ui.com/styles/api/#themeprovider
 * See: Notistack - https://iamhosseindhv.com/notistack
 */

import React, { FC } from "react";
import { Provider as StateProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SnackbarProvider from "../SnackbarProvider";
import store from "../state";
import theme from "../theme";

const ContextProvider: FC = ({ children }) => {
  return (
    <StateProvider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </StateProvider>
  );
};

export default ContextProvider;
