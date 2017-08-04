/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 为每个请求注入上下文
 */

'use strict';

const path = require('path');
const winston = require('winston');
const renderer = new (require('../lib/renderer'))({
  context: path.join(__dirname, '../templates')
});

winston.add(winston.transports.File, {filename: path.join(__dirname, '../../server.log')});

// https://github.com/winstonjs/winston#logging-levels
if (process.env.NODE_ENV === 'local') {
  winston.level = 'verbose';
} else {
  winston.level = 'warn';
}

module.exports = async function(ctx, next) {
  ctx.logger = winston;
  ctx.render = renderer.renderXTPL.bind(renderer, ctx.response);
  next();
};
