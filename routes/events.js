const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/events', async (ctx, next) => {
    await ctx.render('events');
    await next();
  });