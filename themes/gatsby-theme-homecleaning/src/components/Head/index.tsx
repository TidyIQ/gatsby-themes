import React, { FC } from "react";
import { Head as TIQHead } from "@tidyiq/sections/dist";
import { HeadProps as TIQHeadProps } from "@tidyiq/sections/dist/types";
import useHeadQuery from "./useHeadQuery";

const Head: FC<HeadProps> = ({ description, title }) => {
  const { googleFontsLink, siteName } = useHeadQuery();
  return (
    <TIQHead description={description} siteName={siteName} title={title}>
      <link href={googleFontsLink} rel="stylesheet" />
    </TIQHead>
  );
};

export default Head;

export interface HeadProps {
  readonly description: TIQHeadProps["description"];
  readonly title: TIQHeadProps["title"];
}
