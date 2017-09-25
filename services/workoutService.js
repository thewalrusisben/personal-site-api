exports.upsertWorkout = (userId, title, description, active, workoutId) => {
  return global.db.workouts.upsert({ facebook_user_id: userId, title, description, active, id: workoutId })
  .then((data) => {
    let whereParams = (workoutId) ? {id: workoutId, facebook_user_id: userId} : {facebook_user_id: userId}
    return global.db.workouts.findOne({
      where: whereParams,
      order: [['created', 'desc']]
    })
  })
}
