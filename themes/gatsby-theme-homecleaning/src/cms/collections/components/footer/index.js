const footer = {
  label: "Footer",
  name: "footer",
  file: `${__dirname}/data/components/footer/footer.yaml`,
  fields: [
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
      label: "Business Details",
      name: "contactArray",
      widget: "list",
      fields: [
        { label: "Label", name: "label", widget: "string" },
        {
          label: "Type",
          name: "type",
          widget: "select",
          options: [
            { label: "Phone", value: "phone" },
            { label: "Email", value: "email" },
            { label: "SMS", value: "sms" },
            { label: "Address", value: "address" },
            { label: "Tax Number", value: "tax" }
          ]
        },
        { label: "URL", name: "href", widget: "string" }
      ]
    },
    {
      label: "Other Links",
      name: "otherLinksArray",
      widget: "list",
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string"
        },
        {
          label: "URL",
          name: "href",
          widget: "string"
        }
      ]
    }
  ]
};

export default footer;
