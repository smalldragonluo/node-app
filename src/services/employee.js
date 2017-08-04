/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description employee service
 */

'use strict';

const employee = require('./model/employee');

module.exports = {
  create: async function(workerId, nick, name, email, account) {
    return await employee.create({
      employeeId: workerId,
      nick: nick,
      name: name,
      email: email,
      account: account
    });
  },
  /**
   * 如何获取一个 plain object http://docs.sequelizejs.com/class/lib/model.js~Model.html#instance-method-get
   * @param workerId
   * @returns {*}
   */
  get: async function(workerId) {
    return await employee.findOne({
      where: {
        employeeId: workerId
      }
    });
  }
};
