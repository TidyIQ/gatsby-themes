/* eslint-disable @typescript-eslint/explicit-function-return-type */
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme();
const stylesArray = [
  "body1",
  "body2",
  "button",
  "caption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2"
];

function createGoogleFontLink(query) {
  const fontArray = [];
  const fontFamilyArray = [];

  // Add font to fontArray while ensuring no duplicates
  function addToFontArray(newFontFamily, newFontWeight) {
    if (fontFamilyArray.indexOf(newFontFamily) === -1) {
      fontArray.push({
        fontFamily: newFontFamily,
        fontWeight: [newFontWeight]
      });
      fontFamilyArray.push(newFontFamily);
    } else {
      const existingFont = fontArray.find(
        font => font.fontFamily === newFontFamily
      );
      if (
        existingFont &&
        existingFont.fontWeight.indexOf(newFontWeight) === -1
      ) {
        existingFont.fontWeight.push(newFontWeight);
      }
    }
  }

  // Add fonts to fontArray
  for (let i = 0; i < stylesArray.length; i += 1) {
    const styleData = query.typographyYaml[stylesArray[i]];
    if (styleData && styleData.fontFamily) {
      const { fontFamily } = styleData;
      const fontWeight =
        styleData.fontWeight || theme.typography[stylesArray[i]].fontWeight;
      addToFontArray(fontFamily, fontWeight);
    }
  }
  addToFontArray(query.logoYaml.fontFamily, query.logoYaml.fontWeight);

  // Format fonts to Google Fonts CDN format
  let googleFontFamily = "";
  for (let i = 0; i < fontArray.length; i += 1) {
    const formattedFontFamily = fontArray[i].fontFamily.replace(" ", "+");
    const formattedFontWeight = fontArray[i].fontWeight.join(",");
    const addSeperator = i + 1 !== fontArray.length ? "|" : "";
    googleFontFamily += `${formattedFontFamily}:${formattedFontWeight}${addSeperator}`;
  }

  return `https://fonts.googleapis.com/css?family=${googleFontFamily}&display=swap`;
}

export default createGoogleFontLink;
