/**
 * Icon button that toggles displaying password fields as 'password' type or 'text' type
 */

import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import ShowPasswordIcon from "@material-ui/icons/Visibility";
import HidePasswordIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

/**
 * Styles
 */

const useStyles = makeStyles(theme => ({
  icon: {
    color: `${theme.palette.text.secondary} !important`
  }
}));

// ::::::::::::::::::::::::::::::::::::::::::::::::
// Component
// ::::::::::::::::::::::::::::::::::::::::::::::::

export interface ToggleShowPasswordProps {
  isDense: boolean;
  showPassword: boolean;
  toggleShowPassword: IconButtonProps["onClick"];
}

const ToggleShowPassword: FC<ToggleShowPasswordProps> = ({
  isDense,
  showPassword,
  toggleShowPassword
}) => {
  const classes = useStyles({});
  const buttonSize = isDense ? "small" : "medium";
  const fontSize = isDense ? "small" : "default";
  return (
    <InputAdornment position="end">
      <IconButton onClick={toggleShowPassword} size={buttonSize}>
        {showPassword ? (
          <HidePasswordIcon
            aria-label="Hide password input on screen"
            className={classes.icon}
            fontSize={fontSize}
            titleAccess="Hide password input on screen"
          />
        ) : (
          <ShowPasswordIcon
            aria-label="Display password as text on screen"
            className={classes.icon}
            fontSize={fontSize}
            titleAccess="Display password as text on screen"
          />
        )}
      </IconButton>
    </InputAdornment>
  );
};
export default ToggleShowPassword;
