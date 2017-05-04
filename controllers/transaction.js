exports.createTransaction = function (req, res, next) {
  global.db.transactions.createNewTransaction(req.params)
  .then( function createTransactionResponse (response) { 
    return res.send(response)
  })
}
