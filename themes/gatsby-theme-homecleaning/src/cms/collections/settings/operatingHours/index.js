const operatingHours = {
  label: "Operating Hours",
  name: "hours",
  file: `${__dirname}/data/operatingHours/operatingHours.yaml`,
  fields: [
    {
      label: "Cleaning Hours",
      name: "cleaningHoursArray",
      widget: "list",
      fields: [
        { label: "Day", name: "day", widget: "string" },
        { label: "Open Hours", name: "hours", widget: "string" }
      ]
    },
    {
      label: "Office Hours",
      name: "officeHoursArray",
      widget: "list",
      fields: [
        { label: "Day", name: "day", widget: "string" },
        { label: "Open Hours", name: "hours", widget: "string" }
      ]
    }
  ]
};

export default operatingHours;
