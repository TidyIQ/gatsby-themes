const appProviderComponent = `
  type AppProviderComponent {
    theme: ThemeConfig!
  }
  type ThemeConfig {
    components: ThemeComponents
    palette: ThemePalette
    typography: TypographyYaml
  }
  type ThemeComponents {
    cta: ThemeComponentCTA
  }
  type ThemeComponentCTA {    
    color: String
    contrastText: String
  }
  type ThemePalette {
    primary: ThemePaletteOptions
    secondary: ThemePaletteOptions
    tonalOffset: Float
  }
  type ThemePaletteOptions {
    light: String
    main: String
    dark: String
    contrastText: String
  }
`;

export default appProviderComponent;
