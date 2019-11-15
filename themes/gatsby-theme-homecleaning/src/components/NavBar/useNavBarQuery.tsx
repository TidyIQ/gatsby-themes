import { useStaticQuery, graphql } from "gatsby";
import { NavBarProps } from "@tidyiq/sections/dist/types";

const useNavBarQuery: UseNavBarQuery = () => {
  const query: NavBarQuery = useStaticQuery(graphql`
    query NavBarQuery {
      getNavBarComponent {
        navArray {
          href
          label
        }
      }
    }
  `);
  return {
    navArray: query.getNavBarComponent.navArray
  };
};

export default useNavBarQuery;

interface NavBarQuery {
  getNavBarComponent: {
    navArray: NavBarProps["navArray"];
  };
}

export interface UseNavBarQuery {
  (): { navArray: NavBarProps["navArray"] };
}
