import { TextFieldProps } from "@material-ui/core/TextField";

/**
 * Define variant by including density
 */

export interface DefineVariantMargin {
  (variant: TextFieldProps["variant"], margin: TextFieldProps["margin"]):
    | "standard-none"
    | "standard-dense"
    | "standard-normal"
    | "outlined-none"
    | "outlined-dense"
    | "outlined-normal"
    | "filled-none"
    | "filled-dense"
    | "filled-normal";
}
export const defineVariantMargin: DefineVariantMargin = (
  variant = "standard",
  margin = "normal"
) => `${variant}-${margin}` as ReturnType<DefineVariantMargin>;

/**
 * Get value to use for margin between start adornment icon and label
 */

export interface GetLabelMargin {
  (variantMargin: ReturnType<DefineVariantMargin>): 8 | 12 | 16 | 20 | 22;
}

export const getLabelMargin: GetLabelMargin = variantMargin => {
  switch (variantMargin) {
    case "outlined-none":
    case "outlined-dense":
      return 16;
    case "outlined-normal":
      return 22;

    case "filled-none":
    case "filled-dense":
    case "filled-normal":
      return 20;

    case "standard-none":
    case "standard-dense":
      return 8;
    case "standard-normal":
      return 12;

    default:
      return 8;
  }
};

/**
 * Get value to use for margin between start adornment icon and input
 */

export interface GetInputMargin {
  (variantMargin: ReturnType<DefineVariantMargin>): number;
}

export const getInputMargin: GetInputMargin = variantMargin => {
  switch (variantMargin) {
    case "outlined-none":
    case "outlined-dense":
    case "filled-normal":
      return -4;
    case "outlined-normal":
      return -2;

    case "standard-none":
    case "standard-dense":
      return 5;
    case "standard-normal":
      return 6;

    case "filled-none":
    case "filled-dense":
    default:
      return 0;
  }
};
