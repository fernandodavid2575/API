const env = {
    database: 'api',
    username: 'postgres',
    password: '1234',
    host: '192.168.122.19',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;