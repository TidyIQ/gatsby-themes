/**
 * Configure site with this file.
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  plugins: [
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/ */
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-page-creator */
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/ */
      resolve: "gatsby-plugin-react-helmet"
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/ */
      resolve: "gatsby-plugin-typescript"
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ */
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      /** @see https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/ */
      resolve: "gatsby-transformer-yaml"
    }
  ]
};
