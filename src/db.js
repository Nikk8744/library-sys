require('dotenv').config();
const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
});

module.exports = db;