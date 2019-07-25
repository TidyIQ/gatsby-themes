/**
 * Progress component to show status of long-duration methods/api requests
 */

import React, { Fragment, FC, ComponentType } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import SuccessIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Report";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Collapse from "@material-ui/core/Collapse";

/**
 * Styling
 */

const useStyles = makeStyles(theme => ({
  description: {
    marginTop: theme.spacing(2)
  },
  error: {
    color: theme.statusPalette.error.main
  },
  progress: {
    color: theme.statusPalette.success.main,
    position: "absolute",
    top: 1,
    left: 1
    // zIndex: 1
  },
  progressContainer: {
    margin: "0 auto",
    position: "relative",
    width: "fit-content"
  },
  progressIcon: {
    fontSize: theme.typography.pxToRem(70)
  },
  status: {
    marginTop: theme.spacing(1)
  },
  success: {
    color: theme.statusPalette.success.main
  }
}));

/**
 * Component
 */

interface ProgressProps {
  readonly error: {
    readonly description: string;
    readonly title: string;
  };
  readonly loading: {
    readonly icon: ComponentType<SvgIconProps>;
    readonly title: string;
  };
  readonly status: string;
  readonly success: {
    readonly description: string;
    readonly title?: string;
  };
}

const Progress: FC<ProgressProps> = ({ error, loading, status, success }) => {
  const classes = useStyles({});
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  // isLoading (default)
  let color: SvgIconProps["color"] = "primary";
  let description = "";
  let { icon, title } = loading;
  let iconClass: undefined | string;
  let titleClass: undefined | string;

  // isSuccess
  if (isSuccess) {
    color = undefined;
    ({ description } = success);
    icon = SuccessIcon;
    iconClass = classes.success;
    title = success.title || "Success";
    titleClass = classes.success;
  }

  // isError
  else if (isError) {
    color = "error";
    ({ description, title } = error);
    icon = ErrorIcon;
    titleClass = classes.error;
  }

  const IconComponent = icon;

  return (
    <Fragment>
      <div className={classes.progressContainer}>
        <IconComponent
          className={clsx(classes.progressIcon, iconClass)}
          color={color}
        />
        {isLoading && (
          <CircularProgress className={classes.progress} size={68} />
        )}
      </div>
      <Typography
        align="center"
        className={clsx(classes.status, titleClass)}
        color="inherit"
        component="p"
        variant="h6"
      >
        {title}
      </Typography>
      <Collapse in={isSuccess || isError}>
        <Typography align="center" className={classes.description}>
          {description}
        </Typography>
      </Collapse>
    </Fragment>
  );
};

export default Progress;
