import React, { FC } from "react";
import TIQLogo, { LogoTextProps } from "@tidyiq/components/dist/LogoText";

const Logo: FC<LogoTextProps> = props => {
  const { typographyProps } = props;

  return (
    <TIQLogo
      fontFamily="'Oswald', Helvetica, Arial, sans-serif"
      name={["GoldCoast", "Maids"]}
      weight={400}
      typographyProps={typographyProps}
    />
  );
};

export default Logo;
