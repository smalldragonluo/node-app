/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description index.test
 */

'use strict';

const path = require('path');
const expect = require('chai').expect;

describe('renderer', function() {
  //模块跨BU使用
  it('should render content', function(done) {
    const renderer = new (require('../src/lib/renderer'))({
      context: path.join(__dirname, '../src/templates')
    });
    renderer.renderXTPL({}, 'index').then(function(content) {
      expect(content).to.be.include('<div');
      done();
    }, function(err) {
      done(err);
    });
  });
});
