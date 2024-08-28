module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Admin settings for session duration
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    session: {
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        secure: env.bool('SESSION_COOKIE_SECURE', true), // Set to true if using HTTPS
      },
    },
  },
});
