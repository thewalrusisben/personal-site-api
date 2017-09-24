'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex('workouts_users', ['facebook_user_id'], {
      indexName: 'facebook_id',
      indicesType: 'UNIQUE'
    })
  }
};
