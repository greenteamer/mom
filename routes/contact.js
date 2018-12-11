const Router = require('koa-router');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/contact', async (ctx, next) => {
      await ctx.render('contact');
      await next();
    })

  app.use(router.routes());
  app.use(router.allowedMethods());
}