module.exports = {
  siteMetadata: {
    title: 'Daimler Clavel',
    titleTemplate: '%s • Web Developer',
    description:
      'Daimler Clavel is a front-end web developer who loves building stuff for the web. He has also worked as a CRO practitioner and Data Implementation Analyst.',
    url: 'https://daimlerclavel.dev',
    siteUrl: 'https://daimlerclavel.dev',
    image: '/images/upgrad.jfif',
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
        icon: 'src/images/favicon.png',
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
  ],
};
