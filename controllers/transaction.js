'use strict'

exports.createTransaction = function (req, res, next) {
  let newTransaction = {
    title: req.params.title,
    amount: req.params.amount,
    user_id: req.params.user_id,
    created: req.params.created
  }
  global.db.transactions.createNewTransaction(newTransaction)
  .then(function createTransactionResponse (response) {
    return res.send(response)
  })
  .catch(function (err) {
    console.log(err)
  })
}

exports.updateTransaction = function (req, res, next) {
  let transactionData = {
    title: req.params.title,
    amount: req.params.amount,
    user_id: req.params.user_id
  }
  let transactionId = req.params.transaction_id
  global.db.transactions.updateTransaction(transactionData, transactionId)
  .then(function updatedTransactionResponse (response) {
    return res.send(response)
  })
  .catch(function (err) {
    console.log(err)
  })
}

exports.deleteTransaction = function (req, res, next) {
  let transactionData = {
    active: 0
  }
  let transactionId = req.params.transaction_id
  global.db.transactions.updateTransaction(transactionData, transactionId)
  .then(function updatedTransactionResponse (response) {
    return res.send(response)
  })
  .catch(function (err) {
    console.log(err)
  })
}

exports.getUserTransactions = function (req, res, next) {
  let userId = req.params.user_id
  global.db.transactions.getUserTransactions(userId)
  .then(function getUserTransactionsResponse (response) {
    return res.send(200, response)
  })
}
