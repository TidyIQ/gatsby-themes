/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { darken, lighten } from "@tidyiq/sections/dist/utils/colorManipulator";
import deepmerge from "deepmerge";
import removeEmpty from "../../utils/removeEmpty";

/**
 * Create primary and secondary colour variants
 *
 * @param {{
 *    primary: {
 *      light?: string;
 *      main: string;
 *      dark?: string;
 *      contrastText?: string;
 *    };
 *    secondary: {
 *      light?: string;
 *      main: string;
 *      dark?: string;
 *      contrastText?: string;
 *    };
 * }} cmsPaletteData
 * @param {{
 *    light: number;
 *    dark: number;
 * }} tonalOffset
 */
export default function createPalette(cmsPaletteData, tonalOffset) {
  const cmaPalette = removeEmpty({
    primary: {
      light: cmsPaletteData.advanced.primaryVariants.light,
      main: cmsPaletteData.primary,
      dark: cmsPaletteData.advanced.primaryVariants.dark,
      contrastText: cmsPaletteData.advanced.primaryVariants.contrastText
    },
    secondary: {
      light: cmsPaletteData.advanced.secondaryVariants.light,
      main: cmsPaletteData.secondary,
      dark: cmsPaletteData.advanced.secondaryVariants.dark,
      contrastText: cmsPaletteData.advanced.secondaryVariants.contrastText
    }
  });

  const augmentedPalette = {
    primary: {
      light: lighten(cmsPaletteData.primary, tonalOffset.light),
      main: cmsPaletteData.primary,
      dark: darken(cmsPaletteData.primary, tonalOffset.dark)
    },
    secondary: {
      light: lighten(cmsPaletteData.secondary, tonalOffset.light),
      main: cmsPaletteData.secondary,
      dark: darken(cmsPaletteData.secondary, tonalOffset.dark)
    }
  };

  return deepmerge(augmentedPalette, cmaPalette);
}
