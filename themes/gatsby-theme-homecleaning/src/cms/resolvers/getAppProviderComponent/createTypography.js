/* eslint-disable @typescript-eslint/explicit-function-return-type */

import removeEmpty from "../../utils/removeEmpty";

const typographyTypes = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body1",
  "body2",
  "button",
  "caption",
  "subtitle1",
  "subtitle2"
];

export default function createTypography(cmsTypographyData, palette) {
  let typography = {};

  // Iterate over cmsTypographyData object and replace each color field with the palette color value
  Object.entries(cmsTypographyData).forEach(([key, value]) => {
    if (typographyTypes.indexOf(key) !== -1) {
      let color = "";
      switch (value.color) {
        case "primary":
          color = palette.primary.main;
          break;
        case "primaryLight":
          color = palette.primary.light;
          break;
        case "primaryDark":
          color = palette.primary.dark;
          break;
        case "secondary":
          color = palette.secondary.main;
          break;
        case "secondaryLight":
          color = palette.secondary.light;
          break;
        case "secondaryDark":
          color = palette.secondary.dark;
          break;
        case "black":
          color = "rgba(0,0,0,0.87)";
          break;
        case "blackLight":
          color = "rgba(0,0,0,0.54)";
          break;
        case "white":
          color = "rgba(255,255,255,0.87)";
          break;
        case "whiteLight":
          color = "rgba(255,255,255,0.54)";
          break;
        default:
          color = null;
      }
      typography = {
        ...typography,
        [key]: {
          color,
          fontFamily: value.fontFamily || null,
          fontSize: value.fontSize || null,
          fontWeight: value.fontWeight || null
        }
      };
    }
  });

  return removeEmpty(typography);
}

// for (const [key, value] of Object.entries(typographyYaml)) {
//   if (typographyTypes.indexOf(key) !== -1) {
//     const { color } = value;
//     typography = {
//       ...typography,
//       [key]: {
//         color: getColorValue(palette, color),
//         fontFamily: value.fontFamily || null,
//         fontSize: value.fontSize || null,
//         fontWeight: value.fontWeight || null
//       }
//     };
//   }
// }
