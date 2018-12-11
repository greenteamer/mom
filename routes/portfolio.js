const Router = require('koa-router');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/portfolio', async (ctx, next) => {
      await ctx.render('portfolio');
      await next();
    })

  app.use(router.routes());
  app.use(router.allowedMethods());
}