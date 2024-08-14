const dotenv = require("dotenv");

dotenv.config();
module.exports={
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    SECRET_KEY: process.env.SECRET_KEY
}