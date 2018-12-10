const Router = require('koa-router');
const compose = require('koa-compose');


const adminRoutes = require('./admin');

const homeRoutes = require('./home');
const usersRoutes = require('./users');
const resumeRoutes = require('./resume');
const portfolioRoutes = require('./portfolio');
const eventsRoutes = require('./events');
const blogRoutes = require('./blog');
const contactRoutes = require('./contact');


module.exports = compose([
  adminRoutes.routes(),
  adminRoutes.allowedMethods(),

  homeRoutes.routes(),
  homeRoutes.allowedMethods(),
  usersRoutes.routes(),
  usersRoutes.allowedMethods(),
  resumeRoutes.routes(),
  resumeRoutes.allowedMethods(),
  portfolioRoutes.routes(),
  portfolioRoutes.allowedMethods(),
  eventsRoutes.routes(),
  eventsRoutes.allowedMethods(),
  blogRoutes.routes(),
  blogRoutes.allowedMethods(),
  contactRoutes.routes(),
  contactRoutes.allowedMethods(),
]);
