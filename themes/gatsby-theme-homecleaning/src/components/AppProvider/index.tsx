import React, { FC } from "react";
import { AppProvider as TIQAppProvider } from "@tidyiq/sections/dist";
import useAppProviderQuery from "./useAppProviderQuery";

const AppProvider: FC = ({ children }) => {
  const { theme } = useAppProviderQuery();
  return <TIQAppProvider theme={theme}>{children}</TIQAppProvider>;
};

export default AppProvider;
