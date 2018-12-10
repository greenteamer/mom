const Router = require('koa-router');
const compose = require('koa-compose');


const router = new Router();
const admin = new Router();

admin
  .get('/', (ctx, next) => {
    ctx.body = 'hello admin';
  })
  .get('/posts', (ctx, next) => {
    ctx.body = 'hello admin posts';
  })
  .post('/posts', (ctx, next) => {
    ctx.body = 'hello admin posts post';
  });

router.use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
