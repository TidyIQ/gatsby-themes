const getHomePageFold = {
  Query: {
    getHomePageFold: {
      type: "HomePageFold",
      resolve(source, args, context) {
        const homeYaml = context.nodeModel.getAllNodes({
          type: "HomeYaml"
        })[0];
        return {
          bgImage: homeYaml.fold.bgImage,
          highlightedReviewProps: homeYaml.fold.highlightedReviewProps,
          preBookingFormProps: homeYaml.fold.preBookingFormProps,
          subtitle: homeYaml.fold.subtitle,
          title: homeYaml.fold.title
        };
      }
    }
  }
};

export default getHomePageFold;
