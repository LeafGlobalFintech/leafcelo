const { MONGO_URI, PORT, JWT_TOKEN } = process.env;

const config = {
  PORT,
  MONGO_URI,
  JWT_TOKEN,
  PUBLIC_ROUTES:["/public"]
}

module.exports = config;
