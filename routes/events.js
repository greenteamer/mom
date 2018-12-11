const Router = require('koa-router');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/events', async (ctx, next) => {
      await ctx.render('events');
      await next();
    })

  app.use(router.routes());
  app.use(router.allowedMethods());
}