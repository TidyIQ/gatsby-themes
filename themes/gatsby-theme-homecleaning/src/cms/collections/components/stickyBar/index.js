const stickyBar = {
  label: "Sticky Bar",
  name: "stickyBar",
  file: `${__dirname}/data/components/stickyBar/stickyBar.yaml`,
  fields: [
    {
      label: "Chat Button Text",
      name: "chatText",
      widget: "string"
    },
    {
      label: "Call to Action Text",
      name: "ctaText",
      widget: "string"
    },
    {
      label: "Social Media Links",
      name: "socialArray",
      required: false,
      widget: "list",
      fields: [
        {
          label: "Platform",
          name: "platform",
          widget: "relation",
          collection: "socialMedia",
          displayFields: "platform",
          searchFields: "platform",
          valueField: "platform"
        }
      ]
    },
    {
      label: "Background Color",
      name: "backgroundColor",
      required: false,
      widget: "string",
      hint: "If left blank this will default to your Primary Light colour"
    }
  ]
};

export default stickyBar;
