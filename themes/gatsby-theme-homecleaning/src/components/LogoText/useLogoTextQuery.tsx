import { useStaticQuery, graphql } from "gatsby";
import { CreateLogoTextProps } from "@tidyiq/sections/dist/types";

const useLogoTextQuery: UseLogoTextComponent = () => {
  const query: LogoTextQuery = useStaticQuery(graphql`
    query LogoTextQuery {
      getLogoTextComponent {
        casing
        fontFamily
        letterSpacing
        name {
          start
          end
        }
        nameSpacing
        textShadow
        weight
      }
    }
  `);
  return {
    logoTextProps: query.getLogoTextComponent
  };
};

export default useLogoTextQuery;

interface LogoTextQuery {
  getLogoTextComponent: {
    casing: "uppercase" | "lowercase" | "capitalize" | "none";
    fontFamily: string;
    letterSpacing: number;
    name: {
      end: string;
      start: string;
    };
    nameSpacing: boolean;
    textShadow: boolean;
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  };
}

export interface UseLogoTextComponent {
  (): { logoTextProps: CreateLogoTextProps };
}
