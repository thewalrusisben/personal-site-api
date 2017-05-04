// Define Server settings
const restify = require('restify')
const server = restify.createServer({
  name: 'planner-api'
})
server.use(restify.bodyParser()) // Body parser, so requests can use post bodies!

// Sequelize global property imports & definition
global.db = require('./models')
global.db.sequelize.sync({force: false})

// Controller Imports
const transactionCtrl = require('./controllers/transaction')

// Transaction Routes
server.post('/transactions', (req, res, next) => {
  transactionCtrl.createTransaction(req, res, next)
})

// Start the server!
server.listen(8080, () => {
  console.log('listening at http://localhost:8080')
})
