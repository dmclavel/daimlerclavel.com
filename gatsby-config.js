const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: 'Daimler Clavel',
    titleTemplate: '%s • Web Developer',
    description:
      'Daimler Clavel is a front-end engineer who loves building stuff for the web. He has also worked as a CRO practitioner and Data Implementation Analyst.',
    url: 'https://daimlerclavel.com',
    siteUrl: 'https://daimlerclavel.com',
    contentType: 'website',
    image: 'https://www.dropbox.com/s/mixlnfprqleyokg/upgrad.png?dl=0',
    twitterUsername: '@daimlerclavel',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daimler Clavel Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#202945',
        theme_color: '#31FFCE',
        display: 'minimal-ui',
        icon: 'https://www.dropbox.com/s/w54gbn5wg6opiuv/favicon.png?dl=0',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
  ],
};
