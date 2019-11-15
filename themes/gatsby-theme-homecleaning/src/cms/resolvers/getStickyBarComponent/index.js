import createSocialArray from "../../utils/createSocialArray";

const getStickyBarComponent = {
  Query: {
    getStickyBarComponent: {
      type: "StickyBarComponent",
      resolve(source, args, context) {
        const allSocialMediaYaml = context.nodeModel.getAllNodes({
          type: "SocialMediaYaml"
        });
        const settingsYaml = context.nodeModel.getAllNodes({
          type: "SettingsYaml"
        })[0];
        const stickyBarYaml = context.nodeModel.getAllNodes({
          type: "StickyBarYaml"
        })[0];

        const { chatText, ctaText } = stickyBarYaml;
        const { email } = settingsYaml;
        const palette = {
          backgroundColor:
            stickyBarYaml.backgroundColor === ""
              ? undefined
              : stickyBarYaml.backgroundColor
        };
        const phone = {
          href: settingsYaml.phone.replace(/\D+/g, ""),
          label: settingsYaml.phone
        };
        const socialArray = createSocialArray(
          stickyBarYaml.socialArray,
          allSocialMediaYaml
        );

        return {
          chatText,
          ctaText,
          email,
          palette,
          phone,
          socialArray
        };
      }
    }
  }
};

export default getStickyBarComponent;
