const Router = require('koa-router');
const Auth = require('../middleware/auth.js');
const { add, del, update, query, queryPage } = require('../controller/user.js');

const protectedRouter = new Router({ prefix: '/user' });
protectedRouter.use(Auth.test);
protectedRouter.post('/add', add);
protectedRouter.delete('/del', del);
protectedRouter.put('/update', update);
protectedRouter.get('/query', query);
protectedRouter.get('/queryPage', queryPage);

module.exports = {
  protectedUserRouter: protectedRouter
}