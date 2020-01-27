import dotenv from 'dotenv';
const config = dotenv.config().parsed;
const PORT = process.env.PORT || 4000;
const DB_PATH = config.dbPath;
const SECRET = config.session;
export {PORT, DB_PATH, SECRET};
