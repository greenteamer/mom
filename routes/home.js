const Router = require('koa-router');
const axios = require('axios');


module.exports = function (app) {
  const router = new Router();

  router
    .get('/', async (ctx, next) => {
      const pages = await axios.get('http://localhost:1337/pages');
      console.log('>>> pages: ', { pages: pages.data });
      await ctx.render('home', { pages: pages.data });
      await next();
    })
    .post('/', async (ctx, next) => {
      ctx.body = 'Hello index post';
      await next();
    });

  app.use(router.routes());
  app.use(router.allowedMethods());
}