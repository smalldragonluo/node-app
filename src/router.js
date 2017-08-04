/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description router
 */

'use strict';

const router = new (require('koa-router'))({
  throw: true
});

router.get('/', async function(ctx, next) {
  await ctx.render('index', {page: 'index'});
});

router.get('/api/getData', async function(ctx, next) {
  ctx.logger.verbose('start to get data');
  ctx.logger.error('failed to get data');
});

module.exports = router;
