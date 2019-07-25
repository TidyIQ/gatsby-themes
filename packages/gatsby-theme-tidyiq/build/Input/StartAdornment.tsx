/**
 * Create start adornment icon
 */

import React, { FC, ComponentType } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Divider from "@material-ui/core/Divider";

/**
 * Styles
 */

interface StylesProps {
  readonly isDense: boolean;
  readonly isStandard: boolean;
}

const useStyles = makeStyles(() => ({
  divider: (props: StylesProps) => ({
    height: props.isDense ? 20 : 28 /* Set height based on density */,
    marginLeft: 8,
    marginRight: 8,
    width: 1
  }),
  inputAdornment: (props: StylesProps) => ({
    marginBottom:
      props.isStandard && props.isDense
        ? 2
        : 0 /* Align dense standard variant icon with text */
  })
}));

/**
 * Component
 */

interface StartAdornmentProps {
  readonly Icon: ComponentType<SvgIconProps>;
  readonly isDefaultStatus: boolean;
  readonly isDense: boolean;
  readonly isStandard: boolean;
}

const StartAdornment: FC<StartAdornmentProps> = ({
  Icon,
  isDefaultStatus,
  isDense,
  isStandard
}) => {
  const classes = useStyles({ isDense, isStandard });
  const fontSize = isDense ? "small" : "default";
  const theme = useTheme();
  const htmlColor = isDefaultStatus
    ? theme.palette.primary.dark
    : theme.palette.error.dark;
  return (
    <InputAdornment position="start" className={classes.inputAdornment}>
      <Icon fontSize={fontSize} htmlColor={htmlColor} />
      {!isStandard && <Divider className={classes.divider} />}
    </InputAdornment>
  );
};

export default StartAdornment;
