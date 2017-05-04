var Sequelize = require('sequelize')
module.exports = (function db () {
  // Define Sequelize connection
  var sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })

  var db = {
    transactions: sequelize.import('./transactionsModel'),
    sequelize: sequelize,
    Sequelize: Sequelize
  }
  return db
})()
