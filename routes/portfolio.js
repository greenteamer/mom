const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/portfolio', async (ctx, next) => {
    await ctx.render('portfolio');
    await next();
  });