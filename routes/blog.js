const Router = require('koa-router');


const router = new Router();

module.exports = router
  .get('/blog', async (ctx, next) => {
    await ctx.render('blog');
    await next();
  });