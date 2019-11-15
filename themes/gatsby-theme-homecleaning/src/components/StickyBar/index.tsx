import React, { FC } from "react";
import { StickyBar as TIQStickyBar } from "@tidyiq/sections/dist";
import useStickyBarQuery from "./useStickyBarQuery";

const StickyBar: FC = () => {
  const { stickyBarProps } = useStickyBarQuery();
  return <TIQStickyBar {...stickyBarProps} />;
};

export default StickyBar;
