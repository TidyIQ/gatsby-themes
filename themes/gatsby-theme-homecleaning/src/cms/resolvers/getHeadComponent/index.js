import createGoogleFontLink from "./createGoogleFontLink";

const getHeadComponent = {
  Query: {
    getHeadComponent: {
      type: "HeadComponent",
      resolve(source, args, context) {
        const logoYaml = context.nodeModel.getAllNodes({
          type: "LogoYaml"
        })[0];
        const settingsYaml = context.nodeModel.getAllNodes({
          type: "SettingsYaml"
        })[0];
        const typographyYaml = context.nodeModel.getAllNodes({
          type: "TypographyYaml"
        })[0];
        const googleFontsLink = createGoogleFontLink({
          logoYaml,
          typographyYaml
        });
        const siteName = settingsYaml.name;
        return {
          googleFontsLink,
          siteName
        };
      }
    }
  }
};

export default getHeadComponent;
