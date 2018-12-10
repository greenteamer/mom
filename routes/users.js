const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/users', async (ctx, next) => {
    ctx.body = 'Hello users';
    await next();
  })
  .post('/users', async (ctx, next) => {
    ctx.body = 'Hello users post';
    await next();
  });