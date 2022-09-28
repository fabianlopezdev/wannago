require('dotenv').config();

const config = {
  URL: process.env.URL,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

module.exports = config;

