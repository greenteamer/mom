const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/resume', async (ctx, next) => {
    await ctx.render('resume');
    await next();
  });