'use strict'

module.exports = function workoutsUsers (sequelize, DataTypes) {
  const WorkoutsUsers = sequelize.define('workouts_users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(255),
    surname: DataTypes.STRING(255),
    facebook_user_id: {
      type: DataTypes.STRING(255),
      unique: true
    },
    created: DataTypes.DATE,
    updated: DataTypes.DATE
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated'
    })
  return WorkoutsUsers
}
