require('dotenv').config();

const config = {
  URL: 'http://localhost:', //process.env.url,
  PORT: 5000, //process.env.port,
  DB_URL: 'mongodb+srv://fabs:9516@cluster0.d737lpi.mongodb.net/wannago?retryWrites=true&w=majority' //process.env.db_url,
};

module.exports = config;

