const getHomePage = {
  Query: {
    getHomePage: {
      type: "HomePage",
      resolve(source, args, context) {
        const homeYaml = context.nodeModel.getAllNodes({
          type: "HomeYaml"
        })[0];
        return {
          pageLayoutProps: homeYaml.pageLayoutProps
        };
      }
    }
  }
};

export default getHomePage;
