/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description app.js，生产环节请添加 Cluster https://nodejs.org/api/cluster.html#cluster_cluster
 */

'use strict';

const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();
const router = require('./router');
const session = require('koa-session');

// static files, better use nginx instead
app.use(koaStatic('.', {
  maxage: 3600000
}));

// session
app.use(session({
  /*
   * (string) cookie key (default is koa:sess)
   * 'session' will result in a cookie that expires when session/browser is closed
   * Warning: If a session cookie is stolen, this cookie will never expire
   */
  key: 'session_id',
  maxAge: 86400000, // (number || 'session') maxAge in ms (default is 1 days)
  overwrite: true, // (boolean) can overwrite or not (default true)
  httpOnly: true, // (boolean) httpOnly or not (default true)
  signed: true, // (boolean) signed or not (default true)
  rolling: false // (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false
}, app));

// context
app.use(require('./middlewares/context'));

// set router
app.use(router.routes());
app.use(router.allowedMethods());
app.on('error', err => {
  console.log.error('server error', err.stack);
});

// start server
app.listen(8080, function(err) {
  if (err) {
    console.log(err.stack);
  } else {
    console.log('server started');
  }
});
