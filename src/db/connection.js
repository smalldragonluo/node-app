/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description db
 */

'use strict';

const Sequelize = require('sequelize');

module.exports = new Sequelize('test', 'root', '12345678', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 5,
    idle: 10000
  },
  timezone: '+0800'
});
