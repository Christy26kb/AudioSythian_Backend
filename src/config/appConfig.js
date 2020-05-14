import dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../../.env` 
  });

const config = {
    port: process.env.PORT || 3000,
    secret: process.env.secret,
    dbConfig: {
        env: {
            connect: process.env.DB_CONNECTION
        }
    }
};

export default config;