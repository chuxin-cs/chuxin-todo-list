const KoaRouter = require('koa-router');

function initRouter(app) {
  const router = new KoaRouter();

  router.get('/index', async (ctx, next) => {
    ctx.body = 'hello koa2';
  });

  // 增加

  // 删除
  // 修改
  // 查询全部
  // 查询分页

  app.use(router.routes())
}

module.exports = initRouter;