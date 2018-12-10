const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/contact', async (ctx, next) => {
    await ctx.render('contact');
    await next();
  });