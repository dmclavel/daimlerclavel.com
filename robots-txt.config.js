module.exports = {
    host: 'https://daimlerclavel.dev',
    sitemap: 'https://daimlerclavel.dev/sitemap.xml',
    resolveEnv: () => process.env.GATSBY_ENV,
    env: {
        development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        production: {
            policy: [{ userAgent: '*', allow: '/' }]
        }
    }
};