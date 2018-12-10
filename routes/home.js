const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/', async (ctx, next) => {
    await ctx.render('home', { message: 'hello message' });
    await next();
  })
  .post('/', async (ctx, next) => {
    ctx.body = 'Hello index post';
    await next();
  });