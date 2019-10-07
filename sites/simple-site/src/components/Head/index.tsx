import React, { FC } from "react";
import TIQHead from "@tidyiq/gatsby-theme-tidyiq/src/Head";
import { HeadProps, GoogleFonts } from "./types";

const googleFonts: GoogleFonts = [
  { family: "Open+Sans|Oswald|Montserrat|Quicksand", weights: "400,500" }
];

const Head: FC<HeadProps> = ({ children, description, title }) => {
  return (
    <TIQHead description={description} title={title}>
      {googleFonts.map(font => {
        const href = `https://fonts.googleapis.com/css?family=${font.family}:${font.weights}&display=swap`;
        return <link href={href} key={href} rel="stylesheet" />;
      })}
      {children}
    </TIQHead>
  );
};

export default Head;
