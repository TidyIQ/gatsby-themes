import createSocialArray from "../../utils/createSocialArray";

const getFooterComponent = {
  Query: {
    getFooterComponent: {
      type: "FooterComponent",
      resolve(source, args, context) {
        const allSocialMediaYaml = context.nodeModel.getAllNodes({
          type: "SocialMediaYaml"
        });
        const operatingHoursYaml = context.nodeModel.getAllNodes({
          type: "OperatingHoursYaml"
        })[0];
        const footerYaml = context.nodeModel.getAllNodes({
          type: "FooterYaml"
        })[0];

        const { contactArray, otherLinksArray } = footerYaml;
        const { cleaningHoursArray, officeHoursArray } = operatingHoursYaml;
        const socialArray = createSocialArray(
          footerYaml.socialArray,
          allSocialMediaYaml
        );

        return {
          cleaningHoursArray,
          contactArray,
          officeHoursArray,
          otherLinksArray,
          socialArray
        };
      }
    }
  }
};

export default getFooterComponent;
