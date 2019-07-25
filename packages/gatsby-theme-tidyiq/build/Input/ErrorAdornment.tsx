/**
 * Icon to show when field is invalid
 */

import React, { FC } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import { useTheme, makeStyles } from "@material-ui/core/styles";

/**
 * Styles
 */

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingLeft: 4,
    paddingRight: 12
  }
});

/**
 * Component
 */

interface ErrorAdornmentProps {
  readonly isDense: boolean;
}

const ErrorAdornment: FC<ErrorAdornmentProps> = ({ isDense }) => {
  const classes = useStyles({});
  const fontSize = isDense ? "small" : "default";
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <ErrorIcon
        fontSize={fontSize}
        htmlColor={theme.statusPalette.error.dark}
      />
    </div>
  );
};

export default ErrorAdornment;
