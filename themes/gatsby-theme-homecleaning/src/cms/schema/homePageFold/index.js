const homePageFold = `
  type HomePageFold {
    bgImage: String!
    highlightedReviewProps: HighlightedReviewProps!
    preBookingFormProps: PreBookingFormProps!
    subtitle: String!
    title: String!
  }
  type HighlightedReviewProps {
    author: String!
    avatar: String!
    location: String!
    review: String!
  }
  type PreBookingFormProps {
    ctaLabel: String!
  }
`;

export default homePageFold;
