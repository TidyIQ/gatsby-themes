/**
 * Create initial values from form object
 */

import { FormData } from "./types";

interface CreateInitialValues {
  (formData: FormData): { [key: string]: string };
}
const createInitialValues: CreateInitialValues = formData => {
  let initialValues = {};
  Object.keys(formData).forEach(field => {
    initialValues = { ...initialValues, [field]: "" };
  });
  return initialValues;
};

export default createInitialValues;
