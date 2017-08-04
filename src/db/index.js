/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description db
 */

'use strict';

// 绑定实体关系
require('./associations.js');

module.exports.sequelize = require('./connection');
