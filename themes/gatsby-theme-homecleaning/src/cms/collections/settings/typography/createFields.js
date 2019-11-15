/* eslint-disable @typescript-eslint/explicit-function-return-type */

import fontWeightOptions from "../../common/fontWeightOptions";
import textColorOptions from "../../common/textColorOptions";

function createFields(types) {
  const fields = [];
  types.map(type =>
    fields.push({
      label: type.label,
      name: type.name,
      widget: "object",
      fields: [
        {
          label: "Font",
          name: "fontFamily",
          required: false,
          widget: "string"
        },
        {
          label: "Size",
          name: "fontSize",
          required: false,
          widget: "string"
        },
        {
          label: "Boldness",
          name: "fontWeight",
          required: false,
          widget: "select",
          options: fontWeightOptions
        },
        {
          label: "Colour",
          name: "color",
          required: false,
          widget: "select",
          options: textColorOptions
        }
      ]
    })
  );
  return fields;
}

export default createFields;
