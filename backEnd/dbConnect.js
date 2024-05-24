const {Pool} = require("pg")
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lunch_managemet',
    password: process.env.DB_PASS,
    port: 5432,
  });

  module.exports = pool;