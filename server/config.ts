import * as dotenv from 'dotenv';
dotenv.config();

export   default {
  URL : process.env.URL,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL
}




