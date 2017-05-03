const Sequelize = require('sequelize')

var sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
