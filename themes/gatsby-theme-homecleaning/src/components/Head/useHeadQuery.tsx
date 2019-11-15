import { useStaticQuery, graphql } from "gatsby";

const useHeadQuery: UseHeadQuery = () => {
  const query: HeadQuery = useStaticQuery(graphql`
    query HeadQuery {
      getHeadComponent {
        googleFontsLink
        siteName
      }
    }
  `);
  return query.getHeadComponent;
};

export default useHeadQuery;

interface HeadQuery {
  getHeadComponent: {
    googleFontsLink: string;
    siteName: string;
  };
}

export interface UseHeadQuery {
  (): {
    googleFontsLink: string;
    siteName: string;
  };
}
