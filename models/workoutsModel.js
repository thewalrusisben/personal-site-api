'use strict'

module.exports = function workouts (sequelize, DataTypes) {
  const Workouts = sequelize.define('workouts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING(255),
    description: DataTypes.STRING(255),
    facebook_user_id: DataTypes.STRING(255),
    status: {
      type: DataTypes.ENUM,
      values: ['completed', 'skipped'],
      allowNull: false,
      defaultValue: 'completed'
    },
    created: DataTypes.DATE,
    updated: DataTypes.DATE
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: 'updated'
    })
  return Workouts
}
