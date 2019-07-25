/**
 * Head component to populate page <head>
 */

import React, { FC } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  readonly description: string;
  readonly title: string;
}

const SEO: FC<SEOProps> = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: "en-AU"
      }}
      meta={[
        {
          name: "description",
          content: description
        }
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
};

export default SEO;
