const restify = require('restify')
const server = restify.createServer({
  name: 'planner-api'
})

// Controller Imports
const transactionCtrl = require('./controllers/index').transaction

server.post('/transaction/:transaction_id/:user_id', (req, res, next) => {
  transactionCtrl.createTransaction(req, res, next)
})

server.listen(8080, () => {
  console.log('listening at http://localhost:8080')
})
