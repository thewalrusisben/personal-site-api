'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      title: {
        type: Sequelize.STRING(255)
      },
      description: {
        type: Sequelize.TEXT('long')
      },
      facebook_user_id: {
        type: Sequelize.STRING(255)
      },
      status: {
        type: Sequelize.ENUM,
        values: ['completed', 'skipped'],
        allowNull: false,
        defaultValue: 'completed'
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  }
};
