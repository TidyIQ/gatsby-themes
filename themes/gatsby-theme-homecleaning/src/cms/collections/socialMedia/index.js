/* eslint-disable @typescript-eslint/camelcase */

const socialMedia = {
  label: "Social Media",
  name: "socialMedia",
  folder: `${__dirname}/data/socialMedia`,
  extension: "yaml",
  create: true,
  identifier_field: "platform",
  fields: [
    {
      label: "Platform",
      name: "platform",
      widget: "select",
      options: ["Facebook", "Twitter"]
    },
    { label: "URL", name: "href", widget: "string" }
  ]
};

export default socialMedia;
