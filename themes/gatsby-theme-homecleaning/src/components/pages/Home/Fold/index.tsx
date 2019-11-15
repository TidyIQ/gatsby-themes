import React, { FC } from "react";
import { HomepageFold as TIQHomePageFold } from "@tidyiq/sections/dist";
import NavBar from "../../../NavBar";
import useHomePageFold from "./useHomePageFold";

const HomePageFold: FC = () => {
  const homePageFoldProps = useHomePageFold();
  return <TIQHomePageFold NavBar={NavBar} {...homePageFoldProps} />;
};

export default HomePageFold;
