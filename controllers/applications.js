'use strict'

exports.getAllApplications = function (req, res, next) {
  global.db.applications.findAll({
    attributes: ['id', 'title', 'subtitle', 'description', 'image_url', 'created'],
    order: [['created', 'DESC']]
  })
  .then(function returnAllApplications (appData) {
    return res.send(appData)
  })
  .catch(function (err) {
    throw new Error(err)
  })
}
