/* eslint-disable @typescript-eslint/camelcase */
const homepage = {
  label: "Home Page",
  name: "home",
  file: `${__dirname}/data/pages/home/home.yaml`,
  fields: [
    {
      label: "SEO",
      name: "pageLayoutProps",
      widget: "object",
      fields: [
        { label: "Page Title", name: "title", widget: "string" },
        {
          label: "Meta Description",
          name: "description",
          widget: "string"
        }
      ]
    },
    {
      label: "Fold",
      name: "fold",
      widget: "object",
      fields: [
        { label: "Heading", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Background Image",
          name: "bgImage",
          widget: "image",
          allow_multiple: false
        },
        {
          label: "Pre Booking Form",
          name: "preBookingFormProps",
          widget: "object",
          fields: [
            { label: "Submit Button Text", name: "ctaLabel", widget: "string" }
          ]
        },
        {
          label: "Highlighted Review",
          name: "highlightedReviewProps",
          widget: "object",
          fields: [
            { label: "Author", name: "author", widget: "string" },
            { label: "Location", name: "location", widget: "string" },
            {
              label: "Avatar",
              name: "avatar",
              widget: "image",
              allow_multiple: false
            },
            { label: "Review", name: "review", widget: "text" }
          ]
        }
      ]
    },
    {
      label: "About Us",
      name: "intro",
      widget: "object",
      fields: [
        { label: "Heading", name: "title", widget: "string" },
        {
          label: "Content",
          name: "description",
          widget: "markdown"
        }
      ]
    }
  ]
};

export default homepage;
