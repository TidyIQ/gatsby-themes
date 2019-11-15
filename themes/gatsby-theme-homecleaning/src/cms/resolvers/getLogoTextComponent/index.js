const getLogoTextComponent = {
  Query: {
    getLogoTextComponent: {
      type: "LogoTextComponent",
      resolve(source, args, context) {
        const logoYaml = context.nodeModel.getAllNodes({
          type: "LogoYaml"
        })[0];

        return {
          casing: logoYaml.casing,
          fontFamily: logoYaml.fontFamily,
          letterSpacing: logoYaml.letterSpacing,
          name: {
            start: logoYaml.name.start,
            end: logoYaml.name.end
          },
          nameSpacing: logoYaml.name.spacing,
          textShadow: logoYaml.textShadow,
          weight: logoYaml.fontWeight
        };
      }
    }
  }
};

export default getLogoTextComponent;
