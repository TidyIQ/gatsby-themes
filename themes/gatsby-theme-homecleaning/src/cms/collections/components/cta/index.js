const cta = {
  label: "Call to Action Button",
  name: "cta",
  file: `${__dirname}/data/components/cta/cta.yaml`,
  fields: [
    {
      label: "Background Color",
      name: "color",
      required: false,
      widget: "string",
      hint: "If left blank this will default to your Secondary colour"
    },
    {
      label: "Contrast Text",
      name: "contrastText",
      required: false,
      widget: "string",
      hint:
        "If left blank this will be calculated automatically to ensure sufficient contrast"
    }
  ]
};

export default cta;
