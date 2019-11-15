import createFields from "./createFields";

const typography = {
  label: "Typography",
  name: "typography",
  file: `${__dirname}/data/typography/typography.yaml`,
  fields: createFields([
    { label: "Title (H1)", name: "h1" },
    { label: "Heading 2 (H2)", name: "h2" },
    { label: "Heading 3 (H3)", name: "h3" },
    { label: "Heading 4 (H4)", name: "h4" },
    { label: "Heading 5 (H5)", name: "h5" },
    { label: "Heading 6 (H6)", name: "h6" },
    { label: "Subtitle 1", name: "subtitle1" },
    { label: "Subtitle 2", name: "subtitle2" },
    { label: "Body 1", name: "body1" },
    { label: "Body 2", name: "body2" },
    { label: "Caption", name: "caption" },
    { label: "Button", name: "button" }
  ])
};

export default typography;
