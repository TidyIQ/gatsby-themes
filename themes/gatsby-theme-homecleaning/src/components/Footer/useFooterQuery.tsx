import { useStaticQuery, graphql } from "gatsby";
import { FooterProps } from "@tidyiq/sections/dist/types";

const useFooterQuery: UseFooterQuery = () => {
  const query: FooterQuery = useStaticQuery(graphql`
    query FooterQuery {
      getFooterComponent {
        cleaningHoursArray {
          day
          hours
        }
        contactArray {
          href
          label
          type
        }
        officeHoursArray {
          day
          hours
        }
        otherLinksArray {
          href
          label
        }
        socialArray {
          href
          platform
        }
      }
    }
  `);
  return { footerProps: query.getFooterComponent };
};

export default useFooterQuery;

interface FooterQuery {
  getFooterComponent: Omit<FooterProps, "Logo">;
}

export interface UseFooterQuery {
  (): { footerProps: Omit<FooterProps, "Logo"> };
}
