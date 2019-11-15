const palette = {
  label: "Palette",
  name: "palette",
  file: `${__dirname}/data/palette/palette.yaml`,
  fields: [
    {
      label: "Primary Colour",
      name: "primary",
      widget: "string"
    },
    {
      label: "Secondary Colour",
      name: "secondary",
      widget: "string"
    },
    {
      label: "Advanced",
      name: "advanced",
      required: false,
      widget: "object",
      fields: [
        {
          label: "Tonal Offset",
          name: "tonalOffset",
          required: false,
          widget: "object",
          hint:
            "Adjusts the light and dark colour variants if not explicity set below",
          fields: [
            {
              label: "Light Variants",
              name: "light",
              required: false,
              widget: "number",
              valueType: "float",
              min: 0,
              max: 1,
              step: 0.1,
              hint:
                "Select a number between 0 (lighter) and 1 (darker). Default is 0.8"
            },
            {
              label: "Dark Variants",
              name: "dark",
              required: false,
              widget: "number",
              valueType: "float",
              min: 0,
              max: 1,
              step: 0.1,
              hint:
                "Select a number between 0 (lighter) and 1 (darker). Default is 0.5"
            }
          ]
        },
        {
          label: "Primary Colour Variants",
          name: "primaryVariants",
          required: false,
          widget: "object",
          fields: [
            {
              label: "Light",
              name: "light",
              required: false,
              default: "''",
              widget: "string",
              hint:
                "We recommend using the colour in the '50' column for your primary colour at https://material.io/resources/color/"
            },
            {
              label: "Dark",
              name: "dark",
              required: false,
              default: "''",
              widget: "string",
              hint:
                "We recommend using the colour in the '900' column for your primary colour at https://material.io/resources/color/"
            },
            {
              label: "Contrast Text",
              name: "contrastText",
              required: false,
              default: "''",
              widget: "string",
              hint:
                "We recommend leaving this blank to ensure your palette has sufficient contrast to maintain high accessibility for all your visitors. It is much preferred to either darken (if you require white contrast text) or lighten (if you require black contrast text) your primary colour"
            }
          ]
        },
        {
          label: "Secondary Colour Variants",
          name: "secondaryVariants",
          required: false,
          widget: "object",
          hint:
            "Light, dark and contrast text colour variants are calculated automatically based on your secondary colour. You can override this by defining their colours here",
          fields: [
            {
              label: "Light",
              name: "light",
              required: false,
              default: "''",
              widget: "string"
            },
            {
              label: "Dark",
              name: "dark",
              required: false,
              default: "''",
              widget: "string"
            },
            {
              label: "Contrast Text",
              name: "contrastText",
              required: false,
              default: "''",
              widget: "string"
            }
          ]
        }
      ]
    }
  ]
};

export default palette;
