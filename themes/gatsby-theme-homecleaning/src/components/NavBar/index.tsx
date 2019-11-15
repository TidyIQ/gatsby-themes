import React, { FC } from "react";
import { NavBar as TIQNavBar } from "@tidyiq/sections/dist";
import { NavBarProps as TIQNavBarProps } from "@tidyiq/sections/dist/types";
import Logo from "../LogoText";
import useNavBarQuery from "./useNavBarQuery";

const NavBar: FC<NavBarProps> = ({ pathName }) => {
  const { navArray } = useNavBarQuery();
  return <TIQNavBar Logo={Logo} navArray={navArray} pathName={pathName} />;
};

export default NavBar;

export interface NavBarProps {
  readonly pathName: TIQNavBarProps["pathName"];
}
