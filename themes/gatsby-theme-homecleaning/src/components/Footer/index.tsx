import React, { FC } from "react";
import { Footer as TIQFooter } from "@tidyiq/sections/dist";
import Logo from "../LogoText";
import useFooterQuery from "./useFooterQuery";

const Footer: FC = () => {
  const { footerProps } = useFooterQuery();
  return <TIQFooter Logo={Logo} {...footerProps} />;
};

export default Footer;
