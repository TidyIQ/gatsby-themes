import { useStaticQuery, graphql } from "gatsby";
import { HomePageFoldProps } from "@tidyiq/sections/dist/types";

const useHomePageFold: UseHomePageFold = () => {
  const query: HomePageFoldQuery = useStaticQuery(graphql`
    query HomePageFoldQuery {
      getHomePageFold {
        bgImage
        highlightedReviewProps {
          author
          avatar
          location
          review
        }
        preBookingFormProps {
          ctaLabel
        }
        subtitle
        title
      }
    }
  `);
  return query.getHomePageFold;
};

export default useHomePageFold;

interface HomePageFoldQuery {
  getHomePageFold: {
    bgImage: HomePageFoldProps["bgImage"];
    highlightedReviewProps: HomePageFoldProps["highlightedReviewProps"];
    preBookingFormProps: HomePageFoldProps["preBookingFormProps"];
    subtitle: HomePageFoldProps["subtitle"];
    title: HomePageFoldProps["title"];
  };
}

export interface UseHomePageFold {
  (): {
    bgImage: HomePageFoldProps["bgImage"];
    highlightedReviewProps: HomePageFoldProps["highlightedReviewProps"];
    preBookingFormProps: HomePageFoldProps["preBookingFormProps"];
    subtitle: HomePageFoldProps["subtitle"];
    title: HomePageFoldProps["title"];
  };
}
