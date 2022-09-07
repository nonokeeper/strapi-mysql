module.exports = ({ env }) => ({
  host: env('APP_HOST', 'localhost'),
  port: env.int('NODE_PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
