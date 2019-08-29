/**
 * Configure site with this file.
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/ */
      resolve: "gatsby-plugin-netlify-cms"
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ */
      resolve: "gatsby-plugin-react-helmet"
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/ */
      resolve: "gatsby-plugin-typescript"
    }
  ]
};
