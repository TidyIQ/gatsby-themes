const logoTextComponent = `
  type LogoTextComponent {
    casing: String
    fontFamily: String
    letterSpacing: Int
    name: LogoTextComponentName!
    nameSpacing: Boolean
    textShadow: Boolean
    weight: Int
  }
  type LogoTextComponentName {
    start: String!
    end: String
  }
`;

export default logoTextComponent;
