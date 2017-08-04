/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description employee service
 */

'use strict';

const Sequelize = require('sequelize');
const sq = require('../db').sequelize;
const employee = require('./model/employee');
const exam = require('./model/exam');
const normalize = require('./lib/data-normalize');

module.exports = {
  create: function* (workerId, nick, name, email, account, tbww) {
    return normalize(
      yield employee.create({
        employeeId: workerId,
        nick: nick,
        name: name,
        email: email,
        account: account,
        tbww: tbww
      })
    );
  },
  get: function* (workerId) {
    return normalize(
      yield employee.findOne({
        where: {
          employeeId: workerId
        }
      })
    );
  },
  getList: function* () {
    /*return employee.findAll({
      order: [
        // Will order by max(age) DESC
        [sequelize.fn('max', sequelize.col('eId')), 'DESC']
      ]
    });*/
  }
};
