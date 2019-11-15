const stickyBarComponent = `
  type StickyBarComponent {
    chatText: String!
    ctaText: String!
    email: String!
    palette: StickyBarPalette
    phone: Phone!
    socialArray: [SocialMediaLink]
  }
  type StickyBarPalette {
    background: String
  }
  type Phone {
    href: String!
    label: String!
  }
`;

export default stickyBarComponent;
