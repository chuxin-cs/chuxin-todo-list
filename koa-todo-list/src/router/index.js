const KoaRouter = require('koa-router');
const mysql = require('mysql2/promise');

function initRouter(app) {
  const router = new KoaRouter();

  // 创建数据库连接池
  const pool = mysql.createPool({
    host: '119.91.239.178', // 数据库主机地址
    user: 'todo_list', // 数据库用户名
    password: 'nyGdHZxyrnm6h8M3', // 数据库密码
    database: 'todo_list', // 数据库名
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  // 增加
  router.post('/add', async (ctx) => {
    try {
      const { data } = ctx.request.body;
      console.log(data, "===>");
      const [result] = await pool.execute('INSERT INTO todo SET ?', [data]);
      ctx.body = { message: '增加成功',status:200, insertId: result.insertId };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '增加失败', error: error.message };
    }
  });

  // 删除
  router.delete('/del', async (ctx) => {
    try {
      const { id } = ctx.query;
      const [result] = await pool.execute('DELETE FROM todo WHERE id = ?', [id]);
      if (result.affectedRows > 0) {
        ctx.body = { message: '删除成功' };
      } else {
        ctx.status = 404;
        ctx.body = { message: '未找到要删除的记录' };
      }
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '删除失败', error: error.message };
    }
  });

  // 修改
  router.put('/update', async (ctx) => {
    try {
      const { id, data } = ctx.request.body;
      const [result] = await pool.execute('UPDATE todo SET ? WHERE id = ?', [data, id]);
      if (result.affectedRows > 0) {
        ctx.body = { message: '修改成功' };
      } else {
        ctx.status = 404;
        ctx.body = { message: '未找到要修改的记录' };
      }
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '修改失败', error: error.message };
    }
  });

  // 查询全部
  router.get('/query', async (ctx,next) => {
    try {
      const [rows] = await pool.execute('SELECT * FROM todo');
      ctx.body = { message: '查询全部成功', data: rows };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '查询全部失败', error: error.message };
    }

    next()
  });

  // 查询分页
  router.get('/queryPage', async (ctx) => {
    try {
      const { page = 1, pageSize = 10 } = ctx.query;
      const offset = (page - 1) * pageSize;
      const [rows] = await pool.execute('SELECT * FROM todo LIMIT ? OFFSET ?', [Number(pageSize), Number(offset)]);
      ctx.body = { message: '查询分页成功', data: rows };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '查询分页失败', error: error.message };
    }
  });

  app.use(router.routes())
}

module.exports = initRouter;