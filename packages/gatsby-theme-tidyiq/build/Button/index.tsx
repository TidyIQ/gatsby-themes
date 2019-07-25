/**
 * Button component to extend basic Material-UI button
 */

import React, { ComponentType, FC } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import Button, {
  ButtonProps as MuiButtonProps
} from "@material-ui/core/Button";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import ChevronRight from "@material-ui/icons/ChevronRight";

/**
 * Styling
 */

interface StylesProps {
  readonly fontColor: string | undefined;
  readonly htmlColor: string | undefined;
}

const useStyles = makeStyles(theme => ({
  alignStart: {
    justifyContent: "flex-start"
  },
  alignCenter: {
    justifyContent: "center"
  },
  containedPrimary: (props: StylesProps) => {
    if (props.htmlColor) {
      const color = props.fontColor
        ? props.fontColor
        : theme.palette.getContrastText(props.htmlColor);
      return {
        color,
        backgroundColor: props.htmlColor,
        "&:hover": {
          backgroundColor: darken(props.htmlColor, 0.25),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      };
    }
    return {};
  },
  endAdornment: {
    marginLeft: theme.spacing(2)
  },
  endAdornmentContainer: {
    display: "flex",
    justifyContent: "center"
  },
  endAdornmentFloatRight: {
    marginLeft: "auto"
  },
  outlinedPrimary: (props: StylesProps) => {
    if (props.htmlColor) {
      const color = props.fontColor ? props.fontColor : props.htmlColor;
      return {
        color,
        border: `1px solid ${fade(color, 0.5)}`,
        "&:hover": {
          backgroundColor: fade(
            props.htmlColor,
            theme.palette.action.hoverOpacity
          ),
          border: `1px solid ${color}`
        }
      };
    }
    return {};
  },
  startAdornment: {
    marginRight: theme.spacing(2)
  },
  startAdornmentContainer: {
    display: "flex",
    justifyContent: "center"
  },
  textPrimary: (props: StylesProps) => {
    if (props.htmlColor) {
      const color = props.fontColor ? props.fontColor : props.htmlColor;
      return {
        color,
        "&:hover": {
          backgroundColor: fade(
            props.htmlColor,
            theme.palette.action.hoverOpacity
          )
        }
      };
    }
    return {};
  }
}));

/**
 * Component
 */

export interface ButtonProps extends MuiButtonProps {
  readonly align?: "center" | "left";
  readonly endAdornment?: {
    icon: ComponentType<SvgIconProps> | "continue";
    props?: SvgIconProps;
  };
  readonly fontColor?: string;
  readonly htmlColor?: string;
  readonly startAdornment?: {
    icon: ComponentType<SvgIconProps>;
    props?: SvgIconProps;
  };
}

const TIQButton: FC<ButtonProps> = ({
  align,
  children,
  endAdornment,
  fontColor,
  htmlColor,
  startAdornment,
  ...props
}) => {
  const classes = useStyles({ htmlColor, fontColor });
  const { className, color, size, variant } = props;

  // Alignment
  let alignClass = classes.alignCenter;
  let endAdornmentAlignClassName;
  if (align === "left") {
    alignClass = classes.alignStart;
    endAdornmentAlignClassName = classes.endAdornmentFloatRight;
  }

  // Adornments
  const iconSize = size === "large" ? "default" : "small";

  // // End adornment
  let EndAdornmentIcon;
  if (endAdornment) {
    if (endAdornment.icon === "continue") {
      EndAdornmentIcon = ChevronRight;
    } else {
      EndAdornmentIcon = endAdornment.icon;
    }
  }
  const endAdornmentProps = endAdornment ? endAdornment.props : undefined;
  const endAdornmentClassName =
    endAdornmentProps && endAdornmentProps.className
      ? endAdornmentProps.className
      : undefined;

  // // Start adornment
  const StartAdornmentIcon = startAdornment ? startAdornment.icon : undefined;
  const startAdornmentProps = startAdornment ? startAdornment.props : undefined;
  const startAdornmentClassName =
    startAdornmentProps && startAdornmentProps.className
      ? startAdornmentProps.className
      : undefined;

  // Variant
  let btnClasses;
  let btnColor = color;
  if (htmlColor) {
    btnColor = "primary";
    switch (variant) {
      case "contained": {
        btnClasses = { containedPrimary: classes.containedPrimary };
        break;
      }
      case "outlined": {
        btnClasses = { outlinedPrimary: classes.outlinedPrimary };
        break;
      }
      case "text":
      case undefined: {
        btnClasses = { textPrimary: classes.textPrimary };
        break;
      }
      default:
        break;
    }
  }

  return (
    <Button
      {...props}
      classes={btnClasses}
      className={clsx(alignClass, className)}
      color={btnColor}
    >
      {startAdornment && StartAdornmentIcon && (
        <div className={classes.startAdornmentContainer}>
          <StartAdornmentIcon
            fontSize={iconSize}
            {...startAdornmentProps}
            className={clsx(classes.startAdornment, startAdornmentClassName)}
          />
        </div>
      )}
      {children}
      {endAdornment && EndAdornmentIcon && (
        <div
          className={clsx(
            classes.endAdornmentContainer,
            endAdornmentAlignClassName
          )}
        >
          <EndAdornmentIcon
            fontSize={iconSize}
            {...endAdornmentProps}
            className={clsx(classes.endAdornment, endAdornmentClassName)}
          />
        </div>
      )}
    </Button>
  );
};

export default TIQButton;
