import fontWeightOptions from "../../common/fontWeightOptions";

const logo = {
  label: "Logo",
  name: "logo",
  file: `${__dirname}/data/logo/logo.yaml`,
  fields: [
    {
      label: "Text",
      name: "name",
      widget: "object",
      fields: [
        { label: "Starting Text", name: "start", widget: "string" },
        {
          label: "Ending Text",
          name: "end",
          required: false,
          widget: "string"
        },
        {
          label: "Add space between text",
          name: "spacing",
          widget: "boolean"
        }
      ]
    },
    {
      label: "Font",
      name: "fontFamily",
      widget: "string"
    },
    {
      label: "Boldness",
      name: "fontWeight",
      widget: "select",
      options: fontWeightOptions
    },
    {
      label: "Casing",
      name: "casing",
      widget: "select",
      options: [
        { label: "UPPERCASE", value: "uppercase" },
        { label: "lowercase", value: "lowercase" },
        { label: "Capitalize", value: "capitalize" },
        { label: "none", value: "none" }
      ]
    },
    {
      label: "Add Text Shadow",
      name: "textShadow",
      widget: "boolean"
    },
    {
      label: "Letter spacing",
      name: "letterSpacing",
      required: false,
      widget: "number",
      valueType: "float",
      min: 0,
      step: 1
    }
  ]
};

export default logo;
