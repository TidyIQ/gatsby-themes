const business = {
  label: "Business Details",
  name: "business",
  file: `${__dirname}/data/settings/business.yaml`,
  fields: [
    { label: "Business Name", name: "name", widget: "string" },
    { label: "Phone Number", name: "phone", widget: "string" },
    { label: "Email", name: "email", widget: "string" }
  ]
};

export default business;
