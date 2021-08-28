import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
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
      'Daimler Clavel is a front-end web developer who loves building stuff for the web. He has also worked as a CRO practitioner and Data Implementation Analyst.',
    image: '',
    url: 'https://daimlerclavel.dev',
    keywords:
      'Daimler, Clavel, Daimler Clavel Portfolio, front end web developer, data analyst, cro practitioner, dmclavel, developer portfolio',
  };

  const jsonLdAuthor = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': '#daimlerclavel',
    name: 'Daimler Clavel',
    email: 'demclavel@gmail.com',
    url: 'https://daimlerclavel.dev',
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
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">{JSON.stringify(jsonLdWebsite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdAuthor)}</script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
