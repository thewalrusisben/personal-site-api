'use strict'

exports.getLatestPost = function (req, res, next) {
  global.db.posts.findOne({
    attributes: ['id', 'title', 'contents', 'created', 'updated'],
    order: [['created', 'DESC']]
  })
  .then(function returnLatestPost (postData) {
    return res.send(postData)
  })
  .catch(function (err) {
    throw new Error(err)
  })
}

exports.getPostById = function (req, res, next) {
  global.db.posts.findOne({
    attributes: ['id', 'title', 'contents', 'created', 'updated'],
    where: {
      id: req.params.id
    }
  })
  .then(function returnPostById (postData) {
    if (postData) {
      return res.send(200, postData)
    } else {
      return res.send(404, {error: 'No record found!'})
    }
  })
  .catch(function (err) {
    throw new Error(err)
  })
}

exports.getPaginatedPosts = function (req, res, next) {
  let page = Number(req.params.page)
  if (page === 1) {
    page = 0
  } else {
    page = (page - 1) * 10
  }
  global.db.posts.findAll({
    attributes: ['id', 'title', 'created'],
    offset: page,
    order: [['created', 'DESC']],
    limit: 10
  })
  .then(function returnPaginatedPosts (postData) {
    return res.send(200, postData)
  })
  .catch(function (err) {
    throw new Error(err)
  })
}
