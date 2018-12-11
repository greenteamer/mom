const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');
const mongoose = require('mongoose');

const routes = require('./routes');
const config = require('./config.json');


const app = new Koa();

// static
app.use(serve('.'));
app.use(serve(__dirname + '/public'));

// routes
routes(app);

// template ejs
render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  cache: false,
  debug: true,
});

port = process.env.PORT || 3000;

connectDB()
  .on('error', console.log)
  .on('disconnected', connectDB)
  .once('open', startServer);

function  connectDB() {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
  }
  mongoose.connect(`mongodb://${config.db_host}/${config.db_name}`, options);
  return mongoose.connection;
}

function startServer() {
  app.listen(port, () => console.log('* koa server running, port ', port));
}
