'use strict'

module.exports = function transactionsModel (sequelize, DataTypes) {
  var Transactions = sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    created: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  })

  Transactions.createNewTransaction = function createNewTransaction (transaction) {
    return this.create(transaction)
    .then(function createTransactionModelResponse (transaction) {
      return transaction.dataValues
    })
  }

  Transactions.getUserTransactions = function getUserTransactions (userId) {
    return this.findAll({
      attributes: ['id', 'title', 'amount', 'created', 'updated'],
      where: {
        user_id: userId
      }
    })
  }

  return Transactions
}
