/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface ImetaItem {
  content: string;
  name?: string;
  property?: string;
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: ImetaItem[];
  title: string;
}

export const SEO: React.SFC<SEOProps> = props => {
  const { description = '', lang = 'en', meta = [], title } = props;

  const {
    site = {
      siteMetadata: {
        description: '',
        title: '',
        author: '',
      },
    },
  } =
    useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    ) || {};

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={([
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ] as ImetaItem[]).concat(meta)}
    />
  );
};

export default SEO;
