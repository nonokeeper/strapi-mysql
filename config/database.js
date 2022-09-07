module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '141.95.147.190'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bacvfr_strapi'),
      user: env('DATABASE_USERNAME', 'bacvfr_strapi'),
      password: env('DATABASE_PASSWORD', 'bacvfr_strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
