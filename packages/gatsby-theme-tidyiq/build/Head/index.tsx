/**
 * Head component to populate page <head>
 */

import React, { FC } from "react";
import TIQHead from "@tidyiq/components/dist/Head";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  readonly description: string;
  readonly title: string;
}

const SEO: FC<SEOProps> = ({ children, description, title }) => {
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
    <TIQHead
      description={description}
      siteName={site.siteMetadata.title}
      title={title}
    >
      {children}
    </TIQHead>
  );
};

export default SEO;
