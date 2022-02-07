const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_L6kJmeY8o5HwC9TEtZG1oImB0oaGWQlE',
  stripe_test_secret_key: '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',
  stripe_test_api_key: 'pk_live_51KQWgUDdC7e3IDo5QEflIl5VL77qkRb5Ped0BOL7URyr8cHURWraD5qRkgxp6Re7vKM5Nm3vlmjbeUt093B2KVWg00Fj7IdRQk' 
}

export default config
