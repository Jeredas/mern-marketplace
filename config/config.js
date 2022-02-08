const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5557,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27000') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_L6kJmeY8o5HwC9TEtZG1oImB0oaGWQlE',
  stripe_test_secret_key: 'your_secret_key',
  stripe_test_api_key: 'api_secret_key' 
}

export default config
