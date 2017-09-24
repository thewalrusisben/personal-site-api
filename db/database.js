require('dotenv-safe').load()

let config = {}

config[process.env.NODE_ENV] = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  migrationStorageTableName: 'sequelize_meta'
}

module.exports = config
