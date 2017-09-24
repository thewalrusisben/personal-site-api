const { workoutUserService } = require('../services')

exports.findOrCreateNewWorkoutsUser = (req, res, next) => {
  const { facebookId, name, surname } = req.body
  if (!facebookId || !name || !surname) {
    res.send({
      message: `Missing required user parameters.
                Please check your parameters and try your request again!`
    })
  }
  workoutUserService.findAndCreateUser(name, surname, facebookId)
  .then((user) => {return res.send(user)})
  .catch((error) => res.send(error))
}
