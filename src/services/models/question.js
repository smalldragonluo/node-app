/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description exam question model
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../db/connection');

const question = sequelize.define('question', {
  questionId: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  createDate: {
    type: Sequelize.DATE,
    field: 'gmt_create',
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  modifiedDate: {
    type: Sequelize.DATE,
    field: 'gmt_modified'
  },
  content: {
    type: Sequelize.STRING(512),
    field: 'content',
    allowNull: false
  },
  answerIds: {
    type: Sequelize.STRING(128),
    field: 'aids'
  },
  type: {
    type: Sequelize.INTEGER,
    field: 'type',
    allowNull: false
  },
  employeeId: {
    type: Sequelize.INTEGER,
    field: 'uid',
    allowNull: false
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  tableName: 't_exam_question',
  comment: 'question table'
});

module.exports = question;
