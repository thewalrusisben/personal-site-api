exports.findAndCreateUser = (name, surname, facebookId) => {
  return global.db.workoutsUsers.upsert({name, surname, facebook_user_id: facebookId}, {
    where: {
      facebook_user_id: facebookId
    }
  })
  .then(() => {
    return global.db.workoutsUsers.findOne({where: {facebook_user_id: facebookId}})
  })
}
