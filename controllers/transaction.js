'use strict'

exports.createTransaction = function (req, res, next) {
  global.db.transactions.createNewTransaction(req.params)
  .then(function createTransactionResponse (response) {
    return res.send(response)
  })
}

exports.getUserTransactions = function (req, res, next) {
  global.db.transactions.getUserTransactions(req.params.user_id)
  .then(function getUserTransactionsResponse (response) {
    return res.send(response)
  })
}
