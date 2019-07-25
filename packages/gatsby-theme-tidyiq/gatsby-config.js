/**
 * Configure site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-material-ui" /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/ */,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        htmlTitle: "TidyIQ CMS"
      }
    } /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/ */,
    "gatsby-plugin-react-helmet" /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ */,
    "gatsby-plugin-typescript" /* See: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/ */
  ]
};
