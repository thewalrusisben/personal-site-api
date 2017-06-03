'use strict'

// Define Server settings
const restify = require('restify')
const server = restify.createServer({
  name: 'bs-personal-projects-api'
})
server.use(restify.bodyParser()) // Body parser, so requests can use post bodies!
server.use(restify.CORS({
  origins: ['*']
}))

// Sequelize global property imports & definition
global.db = require('./models')
global.db.sequelize.sync({force: false})

// Controller Imports
const postsCtrl = require('./controllers/posts')
const applicationsCtrl = require('./controllers/applications')

server.get('/post/:id', function getLatestPostRequest (req, res, next) {
  req.params.id ? postsCtrl.getPostById(req, res, next) : postsCtrl.getLatestPost(req, res, next)
})

server.get('/posts/:page', function getPaginatedPostsRequest (req, res, next) {
  postsCtrl.getPaginatedPosts(req, res, next)
})

server.get('/applications', function getAllApplicationsRequest (req, res, next) {
  applicationsCtrl.getAllApplications(req, res, next)
})

// Start the server!
server.listen(process.env.PORT || 8081, () => {
  console.log('listening at http://localhost:8081')
})
