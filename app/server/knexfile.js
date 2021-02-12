// Update with your config settings.
const path = require('path');

const options ={
  client: 'postresql',
  connection: {
    database: 'slack',
    host: 'localhost',
    port: 5432,
    user: '',
    password: ''
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex-migrations',
    directory: path.join(process.cwd(), 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(process.cwd(), 'src', 'db', 'seeds'),
  },
}
module.exports = {

  development: config({
    connection: {
      database: 'slack'
    }
  }),
  
  test: config({
    connection: {
      database: 'slack_test',
    }
  }),

  production: config({
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  }),

};

function config(overrides) {
  return Object.assign({}, options, overrides);
}