/* eslint-disable @typescript-eslint/explicit-function-return-type */

import createPalette from "./createPalette";
import createTypography from "./createTypography";
import createTonalOffset from "./createTonalOffset";

const getAppProviderComponent = {
  Query: {
    getAppProviderComponent: {
      type: "AppProviderComponent",
      resolve(source, args, context) {
        const ctaYaml = context.nodeModel.getAllNodes({
          type: "CtaYaml"
        })[0];
        const paletteYaml = context.nodeModel.getAllNodes({
          type: "PaletteYaml"
        })[0];
        const typographyYaml = context.nodeModel.getAllNodes({
          type: "TypographyYaml"
        })[0];

        const tonalOffset = createTonalOffset(paletteYaml.advanced.tonalOffset);
        const palette = createPalette(paletteYaml, tonalOffset);
        const typography = createTypography(typographyYaml, palette);

        const theme = {
          components: {
            cta: ctaYaml
          },
          palette,
          typography
        };

        return { theme };
      }
    }
  }
};

export default getAppProviderComponent;
