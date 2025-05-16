const Router = require('koa-router');
const Auth = require('../middleware/auth.js');
const { add, del, update, query, queryPage } = require('../controller/todolist.js');

const routerConfig = {
  prefix: '/todolist'
}
// 需要鉴权的 admin 路由组
const proteetedRouter = new Router(routerConfig);
// 全局中间件
proteetedRouter.use(Auth.test);
// 不需要鉴权的 admin 路由组
const publicRouter = new Router(routerConfig);

proteetedRouter.post('/add', add);
proteetedRouter.delete('/del', del);
proteetedRouter.put('/update', update);
proteetedRouter.get('/query', query);
proteetedRouter.get('/queryPage', queryPage);

publicRouter.get("/test", async (ctx) => {
  ctx.body = "我是公开的路由";
})

module.exports = {
  publicTodoListRouter: publicRouter,
  proteetedTodoListRouter: proteetedRouter
}