/**
 * Auth buttons component for sign up and sign in
 */

import React, { FC, ComponentType } from "react";
import { useTheme } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import EmailIcon from "@material-ui/icons/Mail";
import Button, { ButtonProps } from "../Button";
import FacebookFilled from "../Icon/Facebook";
import GoogleFilled from "../Icon/Google";
import TwitterFilled from "../Icon/Twitter";

/**
 * Variants
 */

interface UseVariant {
  (variant: AuthButtonProps["authVariant"]): {
    icon: ComponentType<SvgIconProps>;
    fontColor: string | undefined;
    htmlColor: string;
  };
}

const useVariant: UseVariant = variant => {
  const theme = useTheme();
  const authVariants = {
    email: {
      icon: EmailIcon,
      fontColor: undefined,
      htmlColor: "#ffffff"
    },
    facebook: {
      icon: FacebookFilled,
      fontColor: undefined,
      htmlColor: theme.brandPalette.facebook
    },
    google: {
      icon: GoogleFilled,
      fontColor: undefined,
      htmlColor: theme.brandPalette.google
    },
    twitter: {
      icon: TwitterFilled,
      fontColor: "#ffffff",
      htmlColor: theme.brandPalette.twitter
    }
  };
  return authVariants[variant];
};

/**
 * Component
 */

interface AuthButtonProps extends ButtonProps {
  readonly authVariant: "email" | "facebook" | "google" | "twitter";
}

const AuthButton: FC<AuthButtonProps> = ({
  children,
  authVariant,
  ...props
}) => {
  const { variant } = props;
  const { icon, fontColor, htmlColor } = useVariant(authVariant);
  const btnFontColor =
    variant === "contained" || variant === undefined ? fontColor : htmlColor;
  const btnVariant =
    variant === "contained" || variant === undefined ? "contained" : variant;
  return (
    <Button
      endAdornment={{ icon: "continue" }}
      fontColor={btnFontColor}
      htmlColor={htmlColor}
      startAdornment={{ icon }}
      variant={btnVariant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
