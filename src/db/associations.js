/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 表关联关系
 * @refer http://docs.sequelizejs.com/manual/tutorial/associations.html
 */

'use strict';

const employee = require('../services/models/employee');
const question = require('../services/models/question');

// 员工投票
question.belongsToMany(employee, {
  as: 'voter',
  through: vote,
  foreignKey: 'qid',
  otherKey: 'eid'
});
employee.belongsToMany(question, {
  as: 'voted',
  foreignKey: 'qid',
  otherKey: 'eid'
});
