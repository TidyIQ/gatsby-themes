import { useStaticQuery, graphql } from "gatsby";
import { ThemeConfig } from "@tidyiq/sections/dist/types";
import removeEmpty from "../../cms/utils/removeEmpty";

const useAppProviderQuery: UseAppProviderQuery = () => {
  const query: AppProviderQuery = useStaticQuery(graphql`
    query AppProviderQuery {
      getAppProviderComponent {
        theme {
          components {
            cta {
              color
              contrastText
            }
          }
          palette {
            primary {
              contrastText
              dark
              light
              main
            }
            secondary {
              contrastText
              dark
              light
              main
            }
            tonalOffset
          }
          typography {
            body1 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            body2 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            button {
              color
              fontFamily
              fontSize
              fontWeight
            }
            caption {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h1 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h2 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h3 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h4 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h5 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            h6 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            subtitle1 {
              color
              fontFamily
              fontSize
              fontWeight
            }
            subtitle2 {
              color
              fontFamily
              fontSize
              fontWeight
            }
          }
        }
      }
    }
  `);

  return {
    theme: removeEmpty(query.getAppProviderComponent.theme)
  };
};

export default useAppProviderQuery;

interface AppProviderQuery {
  getAppProviderComponent: {
    theme: ThemeConfig;
  };
}

export interface UseAppProviderQuery {
  (): {
    theme: ThemeConfig;
  };
}
