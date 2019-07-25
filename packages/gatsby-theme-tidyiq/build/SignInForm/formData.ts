/**
 * Form data for sign in form
 */

import * as yup from "yup";
import EmailIcon from "@material-ui/icons/Mail";
import PasswordIcon from "@material-ui/icons/Lock";
import { FormData } from "../Form/types";

const signInFormData: FormData = {
  email: {
    icon: EmailIcon,
    id: "email",
    label: "Email",
    type: "email",
    validationSchema: yup
      .string()
      .typeError("Email is invalid")
      .email()
      .required("Email is required.")
  },
  password: {
    icon: PasswordIcon,
    id: "password",
    label: "Password",
    type: "password",
    validationSchema: yup
      .string()
      .typeError(
        "Password must be at least 8 characters in length with at least one letter and one number."
      )
      .min(8)
      .required("Password is required.")
  }
};

export default signInFormData;
