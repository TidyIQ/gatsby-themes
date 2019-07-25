import { ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import EmailIcon from "@material-ui/icons/Mail";
import PasswordIcon from "@material-ui/icons/Lock";

/**
 * Input field data
 */

export interface FieldData {
  [key: string]: {
    readonly icon?: ComponentType<SvgIconProps>;
    readonly label: HTMLLabelElement["innerText"];
    readonly validation: {
      readonly helperMessage?: string;
      readonly invalidMessage?: string;
      readonly minLength?: HTMLInputElement["minLength"];
      readonly pattern: HTMLInputElement["pattern"];
      readonly required: HTMLInputElement["required"];
    };
    readonly type?: HTMLInputElement["type"];
  };
}

const fieldData: FieldData = {
  email: {
    icon: EmailIcon,
    label: "Email",
    validation: {
      pattern: "^(?!\\s*$).+",
      required: true
    },
    type: "email"
  },
  password: {
    icon: PasswordIcon,
    label: "Password",
    validation: {
      invalidMessage:
        "Password must be at least 8 characters in length with at least one letter and one number.",
      minLength: 8,
      pattern: "^(?=.*[A-Za-z])(?=.*\\d).{8,}$",
      required: true
    },
    type: "password"
  }
};

export default fieldData;
