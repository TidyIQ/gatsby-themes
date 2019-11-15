const typographyYaml = `
  type TypographyYaml implements Node {
    h1: ThemeTypography
    h2: ThemeTypography
    h3: ThemeTypography
    h4: ThemeTypography
    h5: ThemeTypography
    h6: ThemeTypography
    subtitle1: ThemeTypography
    subtitle2: ThemeTypography
    body1: ThemeTypography
    body2: ThemeTypography
    caption: ThemeTypography
    button: ThemeTypography
  }
  type ThemeTypography {
    color: String
    fontFamily: String
    fontSize: String
    fontWeight: Int
  }
`;

export default typographyYaml;
