const { workoutService, workoutUserService } = require('../services')

exports.findOrCreateNewWorkoutsUser = (req, res, next) => {
  const { facebookId, name, surname } = req.body
  if (!facebookId) {
    res.send({
      message: `Missing required user parameters.
                Please check your parameters and try your request again!`
    })
  }
  workoutUserService.findAndCreateUser(name, surname, facebookId)
  .then((user) => {return res.send(user)})
  .catch((error) => res.send(error))
}

exports.createOrModifyWorkout = (req, res, next) => {
  const { active, description, title, userId, workoutId } = req.body
  if (!userId) {
    res.send({
      message: `Missing required user parameters.
                Please check your parameters and try your request again!`
    })
  }
  workoutService.upsertWorkout(userId, title, description, active, workoutId)
  .then((lastWorkout) => res.send({workout: lastWorkout}))
  .catch((error) => res.send({error}))
}

exports.findWorkoutsByUser = (req, res, next) => {
  const { userId } = req.params

  global.db.workouts.findAll({ where: { facebook_user_id: userId } })
  .then((workouts) => res.send({workouts}))

}
