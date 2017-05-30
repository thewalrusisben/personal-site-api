'use strict'

module.exports = function postsModel (sequelize, DataTypes) {
  var Posts = sequelize.define('posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.TEXT,
    contents: DataTypes.TEXT,
    created: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  })
  return Posts
}
