const footerComponent = `
  type FooterComponent {
    cleaningHoursArray: [OperatingHours]
    contactArray: [ContactItem]
    officeHoursArray: [OperatingHours]
    otherLinksArray: [OtherFooterLink]
    socialArray: [SocialMediaLink]
  }
  type ContactItem {
    href: String
    label: String!
    type: String!
  }
  type OperatingHours {
    day: String!
    hours: String!
  }
  type OtherFooterLink {
    href: String!
    label: String!
  }
`;

export default footerComponent;
