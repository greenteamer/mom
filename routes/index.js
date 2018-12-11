const Router = require('koa-router');


module.exports = function (app) {
  // pages
  require('./home')(app);
  require('./resume')(app);
  require('./portfolio')(app);
  require('./events')(app);
  require('./blog')(app);
  require('./contact')(app);
}
