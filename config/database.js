module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', null),
        srv: env.bool('DATABASE_SRV', null),
        port: env.int('DATABASE_PORT', null),
        database: env('DATABASE_NAME', null),
        username: env('DATABASE_USERNAME', null),
        password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', null),
      },
    },
  },
});
