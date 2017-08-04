/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description renderer
 */

'use strict';

const xtpl = require('xtpl');
const path = require('path');

module.exports = class Renderer {
  constructor(config) {
    this.context = config.context;
  }

  /**
   * 渲染一个本地的 XTPL 文件
   * @param response 响应
   * @param xtplPath 本地资源路径
   * @param data
   * @returns {Promise}
   */
  renderXTPL(response, xtplPath, data) {
    return new Promise((resolve, reject) => {
      try {
        xtpl.renderFile(path.join(this.context, `${xtplPath}.xtpl`), data || {}, (err, content) => {
          if (err) {
            err.message = 'XTPL 渲染异常：' + err.message;
            reject(err);
          } else {
            response.body = content;
            resolve(content);
          }
        });
      } catch (err) {
        err.message = 'xtpl 执行异常：' + err.message;
        reject(err);
      }
    });
  }
};
