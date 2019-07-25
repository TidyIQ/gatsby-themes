/**
 * Create validation schema from form object
 */

import * as Yup from "yup";
import { FormData } from "./types";

interface CreateValidationSchema {
  (formData: FormData): Yup.ObjectSchema;
}
const createValidationSchema: CreateValidationSchema = formData => {
  let validationSchema = {};
  Object.keys(formData).forEach(field => {
    validationSchema = {
      ...validationSchema,
      [field]: formData[field].validationSchema
    };
  });
  return Yup.object().shape(validationSchema);
};

export default createValidationSchema;
