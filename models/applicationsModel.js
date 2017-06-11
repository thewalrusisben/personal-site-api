'use strict'

module.exports = function applicationsModel (sequelize, DataTypes) {
  var Applications = sequelize.define('applications', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.TEXT,
    subtitle: DataTypes.TEXT,
    github: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    created: DataTypes.DATE
  }, {
    timestamps: true,
    createdAt: 'created'
  })
  return Applications
}
