/**
 * Input field to use with forms
 *
 */

import React, { FC } from "react";
import { FastField, FastFieldProps } from "formik";
import Input, { InputProps } from "../Input";

/**
 * Component
 */

const InputField: FC<Omit<InputProps, "fieldProps">> = ({
  fieldData,
  ...stylesProps
}) => {
  const { id } = fieldData;
  return (
    <FastField name={id}>
      {(fieldProps: FastFieldProps) => (
        <Input fieldData={fieldData} fieldProps={fieldProps} {...stylesProps} />
      )}
    </FastField>
  );
};

export default InputField;
