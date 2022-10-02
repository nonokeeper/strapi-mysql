module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://admin.bacv78.fr'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://admin.bacv78.fr'
          ],
          upgradeInsecureRequests: null,
        }
      }
    }
  },
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin : ['http://localhost:3000', 'http://localhost:1338', 'https://1b08-92-88-6-192.eu.ngrok.io', 'https://mariesophie-book.vercel.app']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
