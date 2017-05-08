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

  Transactions.createNewTransaction = function createNewTransactionInModel (transaction) {
    return this.create(transaction)
    .then(function createTransactionModelResponse (transaction) {
      return transaction.dataValues
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  Transactions.updateTransaction = function updateTransactionInModel (transaction, transactionId) {
    return this.update(transaction, {
      where: {
        id: transactionId
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  Transactions.getUserTransactions = function getUserTransactionsInModel (userId) {
    return this.findAll({
      attributes: ['id', 'title', 'amount', 'created', 'updated'],
      where: {
        user_id: userId
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  return Transactions
}
