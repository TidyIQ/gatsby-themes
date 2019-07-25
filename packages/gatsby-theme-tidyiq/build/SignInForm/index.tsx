/**
 * Sign in form section
 */

import React, { FC } from "react";
import Form, { FormComponentProps } from "../Form";
import InputField from "../InputField";
import formData from "./formData";
import { InputStylingProps } from "../Input";

/**
 * Styling
 */

/**
 * Component
 */

const InnerSignInForm: FC<FormComponentProps> = ({ fields, fieldStyles }) => {
  const { email, password } = fields;
  return (
    <div>
      <InputField fieldData={email} {...fieldStyles} />
      <InputField fieldData={password} {...fieldStyles} />
      <button type="submit">Submit</button>
    </div>
  );
};

interface SignInFormProps {
  readonly fieldStyles?: InputStylingProps;
}

const SignInForm: FC<SignInFormProps> = ({ fieldStyles }) => {
  return (
    <Form
      component={InnerSignInForm}
      formData={formData}
      fieldStyles={fieldStyles}
    />
  );
};

export default SignInForm;
