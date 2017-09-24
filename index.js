'use strict'

// Load Environment Variables
require('dotenv-safe').load()

// Define Server settings
const restify = require('restify')
const server = restify.createServer({
  name: 'bs-personal-projects-api'
})
server.use(restify.bodyParser()) // Body parser, so requests can use post bodies!
server.use(restify.CORS({
  origins: ['*'],
  headers: ['Access-Control-Allow-Origin']
}))

// Sequelize global property imports & definition
global.db = require('./models')
global.db.sequelize.sync({force: false})

// Controller Imports
const { posts, applications, workouts } = require('./controllers')

server.get('/post/:id', (req, res, next) => {
  req.params.id ? postsCtrl.getPostById(req, res, next) : postsCtrl.getLatestPost(req, res, next)
})

server.get('/posts/:page', (req, res, next) => {
  posts.getPaginatedPosts(req, res, next)
})

server.get('/applications', (req, res, next) => {
  applications.getAllApplications(req, res, next)
})

server.post('/workouts/user', (req, res, next) => {
  workouts.findOrCreateNewWorkoutsUser(req, res, next)
})

// Start the server!
server.listen(process.env.PORT || 8081, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`)
})
