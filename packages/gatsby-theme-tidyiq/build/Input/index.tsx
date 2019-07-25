/**
 * Outlined input component to extend basic Material-UI outlined input
 *
 * See:
 */

import React, { FC, useState, useMemo, Fragment } from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { FieldProps } from "formik";
import ToggleShowPassword, {
  ToggleShowPasswordProps
} from "./ToggleShowPassword";
import {
  getLabelMargin,
  defineVariantMargin,
  GetLabelMargin,
  GetInputMargin,
  getInputMargin
} from "./variantFunctions";
import StartAdornment from "./StartAdornment";
import { FieldData } from "../Form/types";
import createTheme, { StatusState } from "./createTheme";
import ErrorAdornment from "./ErrorAdornment";

/**
 * Styling
 */

interface StylesProps {
  inputMargin: ReturnType<GetInputMargin>;
  labelMargin: ReturnType<GetLabelMargin>;
}

const useStyles = makeStyles(() => ({
  adornedInputLabel: (props: StylesProps) => ({
    marginLeft: 24 + props.labelMargin
  }),
  input: (props: StylesProps) => ({
    marginLeft: props.inputMargin
  })
}));

/**
 * Component
 */

export interface InputStylingProps extends BaseTextFieldProps {
  readonly color?: "default" | "primary" | "secondary";
  readonly hideStartAdornment?: boolean;
}

export interface InputProps extends InputStylingProps {
  readonly fieldData: FieldData;
  readonly fieldProps?: FieldProps;
}

const Input: FC<InputProps> = ({
  color = "primary",
  fieldData,
  fieldProps,
  hideStartAdornment = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, toggleShowPassword] = useState(false);

  /* Destructure props */
  const { margin, variant } = props;
  const { icon, label, type, id } = fieldData;
  const { field, form } = fieldProps || { field: undefined, form: undefined };

  /* Define props if this is an <InputField /> component */
  const fmkError = form ? form.errors[id] : undefined;
  const fmkHandleBlur = field ? field.onBlur : undefined;
  const fmkHandleChange = field ? field.onChange : undefined;
  const fmkTouched = form ? form.touched[id] : undefined;
  const fmkValue = field ? field.value : "";

  const value = fmkValue; // CHANGE
  const isEmpty = value.length === 0;

  interface SetStatus {
    (): StatusState;
  }
  const setStatus: SetStatus = () => {
    if (!isEmpty && !fmkError) {
      return "valid";
    }
    if (fmkTouched && fmkError) {
      return "invalid";
    }
    return "default";
  };

  const status = setStatus();

  /* Basic constants */
  const isDefaultStatus = status === "default";
  const isDense = margin === "dense";
  const isStandard = variant === "standard" || !variant;
  const shrink = focused || !isEmpty;

  const variantMargin = defineVariantMargin(variant, margin);

  /**
   * Hack to make 'props.variant' type safe
   *
   * See: https://github.com/mui-org/material-ui/issues/15697
   */
  const tsProps = (() => {
    let tsVariant;
    switch (variant) {
      case "outlined": {
        tsVariant = { variant: variant as "outlined" };
        break;
      }
      case "filled": {
        tsVariant = { variant: "filled" as "filled" };
        break;
      }
      case "standard":
      default: {
        tsVariant = { variant: "standard" as "standard" };
        break;
      }
    }
    const p = props;
    delete p.variant;
    return { ...p, ...tsVariant };
  })();

  /* Create styles */
  const inputMargin = getInputMargin(variantMargin);
  const labelMargin = getLabelMargin(variantMargin);
  const classes = useStyles({ inputMargin, labelMargin });

  /* Create theme based on status and color prop */
  const theme = useMemo(
    () => (muiTheme: Theme) => createTheme(color, status, muiTheme),
    [status]
  );

  /* Handle focus */
  const handleBlur: BaseTextFieldProps["onBlur"] = event => {
    setFocused(false);
    if (fmkHandleBlur) {
      fmkHandleBlur(event);
    }
  };
  const handleFocus: BaseTextFieldProps["onFocus"] = () => {
    setFocused(true);
  };

  /* Handle toggle password click */
  let inputType = type || "text";
  if (type === "password" && showPassword) {
    inputType = "text";
  }
  const handleTogglePassword: ToggleShowPasswordProps["toggleShowPassword"] = () => {
    toggleShowPassword(!showPassword);
  };

  /* Input label props */
  const inputLabelClassName =
    !hideStartAdornment &&
    icon &&
    ((variant !== "filled" && !shrink) || variant === "filled")
      ? classes.adornedInputLabel
      : undefined;

  /* Icon adornments */
  const endAdornment = (
    <Fragment>
      {type === "password" && (
        <ToggleShowPassword
          isDense={isDense}
          showPassword={showPassword}
          toggleShowPassword={handleTogglePassword}
        />
      )}
      {status === "invalid" && <ErrorAdornment isDense={isDense} />}
    </Fragment>
  );

  const startAdornment =
    !hideStartAdornment && icon ? (
      <StartAdornment
        Icon={icon}
        isDefaultStatus={isDefaultStatus}
        isDense={isDense}
        isStandard={isStandard}
      />
    ) : (
      undefined
    );

  return (
    <ThemeProvider theme={theme}>
      <TextField
        error={!isDefaultStatus}
        id={id}
        label={label}
        onBlur={handleBlur}
        onChange={fmkHandleChange}
        onFocus={handleFocus}
        type={inputType}
        {...tsProps}
        InputLabelProps={{
          className: inputLabelClassName,
          shrink,
          ...tsProps.InputLabelProps
        }}
        InputProps={{
          endAdornment,
          inputProps: { className: classes.input },
          startAdornment
        }}
      />
    </ThemeProvider>
  );
};

export default Input;
