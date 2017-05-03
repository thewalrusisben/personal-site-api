exports.createTransaction = (req, res, next) => {
  return res.send({
    transaction: req.params.transaction_id,
    user: req.params.user_id
  })
}
