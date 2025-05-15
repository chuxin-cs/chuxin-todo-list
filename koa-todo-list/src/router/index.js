const KoaRouter = require('koa-router');

function initRouter(app) {
  const router = new KoaRouter();

  // 增加
  router.post('/add', async (ctx) => {
    ctx.body = '增加';
  });

  // 删除
  router.delete('/delete', async (ctx) => {
    ctx.body = '删除';
  });

  // 修改
  router.put('/update', async (ctx) => {
    ctx.body = '修改';
  })
  // 查询全部
  router.get('/query', async (ctx) => {
    ctx.body = '查询全部';
  })
  // 查询分页
  router.get('/queryPage', async (ctx) => {
    ctx.body = '查询分页';
  })

  app.use(router.routes())
}

module.exports = initRouter;