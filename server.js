const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');

const routes = require('./routes');


const app = new Koa();

// static
app.use(serve('.'));
app.use(serve(__dirname + '/public'));

// routes
app.use(routes);

// template ejs
render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  cache: false,
  debug: true,
});

app.listen(3000, () => console.log('* koa server running, port 3000'));
