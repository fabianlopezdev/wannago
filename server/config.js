require('dotenv').config();

const config = {
  URL: 'http://localhost:', //process.env.url,
  PORT: 5000, //process.env.port,
  DB_URL: process.env.db_url,
};

module.exports = config;

