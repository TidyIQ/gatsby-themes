/**
 * Typescript types
 */

import { FormikProps as FProps } from "formik";
import { ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { StringSchema } from "yup";

export type FormikProps = FProps<{
  [key: string]: string;
}>;

/**
 * formData object
 */
export interface FormData {
  [key: string]: FieldData;
}

/**
 * formData fields object
 */
export interface FieldData {
  readonly icon?: ComponentType<SvgIconProps>;
  readonly id: string;
  readonly label: string;
  readonly type?: string;
  readonly validationSchema: StringSchema<string>;
}
