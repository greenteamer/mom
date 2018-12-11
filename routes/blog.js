const Router = require('koa-router');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/blog', async (ctx, next) => {
      await ctx.render('blog');
      await next();
    })

  app.use(router.routes());
  app.use(router.allowedMethods());
}