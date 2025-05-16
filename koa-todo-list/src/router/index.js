const Router = require('koa-router');

const { protectedUserRouter } = require('./user.js')
const { publicTodoListRouter, proteetedTodoListRouter } = require('./todolist.js')

function initRouter(app) {
  const router = new Router({ prefix: '/api' });

  // todolist
  router.use(publicTodoListRouter.routes())
  router.use(proteetedTodoListRouter.routes())
  // user
  router.use(protectedUserRouter.routes())
  // 其他路由
  // ...


  // 注册路由 也可以在这里  也可以在app.js中注册 根据需求调整
  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = initRouter;