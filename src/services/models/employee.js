/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description employee model
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../db/connection');

const employee = sequelize.define('employee', {
  employeeId: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false
  },
  nick: {
    type: Sequelize.STRING(50),
    field: 'nick',
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(50),
    field: 'name',
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    field: 'email',
    allowNull: true
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  tableName: 't_user',
  comment: 'employee table'
});

module.exports = employee;
