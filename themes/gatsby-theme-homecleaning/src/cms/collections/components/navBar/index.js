const navBar = {
  label: "Navigation Bar",
  name: "navBar",
  file: `${__dirname}/data/components/navBar/navBar.yaml`,
  fields: [
    {
      label: "Links",
      name: "navArray",
      widget: "list",
      fields: [
        { label: "Label", name: "label", widget: "string" },
        {
          label: "Page",
          name: "page",
          widget: "select",
          options: [
            { label: "Home", value: "home" },
            { label: "About", value: "about" },
            { label: "Contact", value: "contact" },
            { label: "Frequently Asked Questions", value: "faq" },
            { label: "Pricing", value: "pricing" },
            { label: "Reviews", value: "reviews" },
            { label: "Services", value: "services" }
          ]
        }
      ]
    }
  ]
};

export default navBar;
