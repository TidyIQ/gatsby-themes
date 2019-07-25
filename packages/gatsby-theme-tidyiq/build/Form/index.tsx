/**
 * Forms
 *
 * See: https://jaredpalmer.com/formik/ - Form library
 * See: https://github.com/jquense/yup - Validation
 */

import React, { FC, ComponentType } from "react";
import { Formik } from "formik";
import createInitialValues from "./createInitialValues";
import { FormData } from "./types";
import createValidationSchema from "./createValidationSchema";
import { InputStylingProps } from "../Input";

/**
 * Component
 */

export interface FormComponentProps {
  readonly fields: FormData;
  readonly fieldStyles?: InputStylingProps;
}

interface FormProps {
  readonly component: ComponentType<FormComponentProps>;
  readonly fieldStyles?: InputStylingProps;
  readonly formData: FormData;
}

const Form: FC<FormProps> = ({ component, fieldStyles, formData }) => {
  const initialValues = createInitialValues(formData);
  const validationSchema = createValidationSchema(formData);
  const FormComponent = component;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(_values, { setSubmitting }) => {
        setSubmitting(true);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormComponent fields={formData} fieldStyles={fieldStyles} />
        </form>
      )}
    </Formik>
  );
};

export default Form;
