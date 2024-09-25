import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@gatsbyjs/reach-router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterTitle
        twitterUsername
      }
    }
  }
`;
function SEO({ title, description, image }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    twitterTitle,
    contentType,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Daimler Clavel • Web Developer',
    author: {
      '@type': 'Person',
      '@id': '#daimlerclavel',
    },
    description:
      'Daimler Clavel is a front-end web engineer who loves building stuff for the web. He has also worked as a CRO practitioner and Data Implementation Analyst.',
    image: '',
    url: 'https://daimlerclavel.com',
    keywords:
      'Daimler, Clavel, Daimler Clavel Portfolio, frontend engineer, frontend web developer, reactjs developer, data analyst, cro practitioner, dmclavel, developer portfolio',
  };

  const jsonLdAuthor = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': '#daimlerclavel',
    name: 'Daimler Clavel',
    email: 'dmclavel@alum.up.edu.ph',
    url: 'https://daimlerclavel.com',
  };

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {contentType && <meta property="og:type" content={contentType} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary" />
      {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={twitterTitle} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">{JSON.stringify(jsonLdWebsite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdAuthor)}</script>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;
