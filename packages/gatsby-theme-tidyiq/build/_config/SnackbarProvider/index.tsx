/**
 * Snackbar provider settings
 *
 * See: Notistack - https://iamhosseindhv.com/notistack
 */

import React, { FC } from "react";
import {
  SnackbarProvider as NisSnackbarProvider,
  SnackbarProviderProps
} from "notistack";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import SuccessIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import CloseButton from "./CloseButton";

/**
 * Styling
 */

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    opacity: 0.9
  },
  variantError: {
    backgroundColor: theme.statusPalette.error.main
  },
  variantInfo: {
    backgroundColor: theme.statusPalette.info.main
  },
  variantSuccess: {
    backgroundColor: theme.statusPalette.success.main
  },
  variantWarning: {
    backgroundColor: theme.statusPalette.warning.main
  }
}));

/**
 * Component
 */

const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const classes = useStyles();

  const iconVariant: SnackbarProviderProps["iconVariant"] = {
    error: <ErrorIcon className={classes.icon} fontSize="small" />,
    info: <InfoIcon className={classes.icon} fontSize="small" />,
    success: <SuccessIcon className={classes.icon} fontSize="small" />,
    warning: <WarningIcon className={classes.icon} fontSize="small" />
  };

  const snackbarClasses: SnackbarProviderProps["classes"] = {
    variantError: classes.variantError,
    variantInfo: classes.variantInfo,
    variantSuccess: classes.variantSuccess,
    variantWarning: classes.variantWarning
  };

  return (
    <NisSnackbarProvider
      action={key => <CloseButton id={key} />}
      classes={snackbarClasses}
      iconVariant={iconVariant}
    >
      {children}
    </NisSnackbarProvider>
  );
};

export default SnackbarProvider;
