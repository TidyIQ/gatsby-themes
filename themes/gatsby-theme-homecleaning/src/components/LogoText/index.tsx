import React, { FC } from "react";
import { LogoText as TIQLogoText } from "@tidyiq/sections/dist";
import { LogoTextProps as TIQLogoTextProps } from "@tidyiq/sections/dist/types";
import useLogoTextQuery from "./useLogoTextQuery";

const LogoText: FC<TIQLogoTextProps> = ({ typographyProps }) => {
  const { logoTextProps } = useLogoTextQuery();
  return <TIQLogoText {...logoTextProps} typographyProps={typographyProps} />;
};

export default LogoText;
