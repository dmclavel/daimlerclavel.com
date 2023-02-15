module.exports = {
  host: 'https://daimlerclavel.com',
  sitemap: 'https://daimlerclavel.com/sitemap.xml',
  resolveEnv: () => process.env.GATSBY_ENV,
  env: {
    development: {
      policy: [{ userAgent: '*', disallow: ['/'] }],
    },
    production: {
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
};
