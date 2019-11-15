import { useStaticQuery, graphql } from "gatsby";
import { StickyBarProps } from "@tidyiq/sections/dist/types";

const useStickyBarQuery: UseStickyBarQuery = () => {
  const query: StickyBarQuery = useStaticQuery(graphql`
    query StickyBarQuery {
      getStickyBarComponent {
        chatText
        ctaText
        email
        palette {
          background
        }
        phone {
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
  return { stickyBarProps: query.getStickyBarComponent };
};

export default useStickyBarQuery;

interface StickyBarQuery {
  getStickyBarComponent: StickyBarProps;
}

export interface UseStickyBarQuery {
  (): { stickyBarProps: StickyBarProps };
}
