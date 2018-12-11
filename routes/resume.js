const Router = require('koa-router');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/resume', async (ctx, next) => {
      await ctx.render('resume');
      await next();
    })

  app.use(router.routes());
  app.use(router.allowedMethods());
}