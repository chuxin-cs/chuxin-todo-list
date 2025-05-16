const dayjs = require('dayjs');
const { pool } = require('../core/db');

class TodoListController {
  /**
   * 新增
   * @param {*} ctx
   */
  async add(ctx) {
    try {
      const data = ctx.request.body;
      // 生成符合 MySQL datetime 格式的时间戳
      const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
      
      // 使用显式字段列表的 SQL 语句
      const sql = `INSERT INTO todo (name, createTime, updateTime) 
                   VALUES (?, ?, ?)`;
      
      const [result] = await pool.execute(sql, [
        data.name,
        timestamp,
        timestamp
      ]);
      
      ctx.body = { 
        message: '增加成功', 
        status: 200, 
        insertId: result.insertId 
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '增加失败', error: error.message };
    }
  }

  /**
   * 删除
   * @param {*} ctx
   */
  async del(ctx) {
    try {
      const { id } = ctx.request.body;
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
  }


  /**
   * 修改
   * @param {*} ctx
   */
  async update(ctx) {
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
  }

  /**
   * 查询全部
   * @param {*} ctx
   */
  async query(ctx) {
    try {
      const [rows] = await pool.execute('SELECT * FROM todo');
      ctx.body = { message: '查询全部成功', data: rows };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '查询全部失败', error: error.message };
    }
  }

  /**
   * 分页查询
   * @param {*} ctx
   */
  async queryPage(ctx) {
    try {
      const { page = 1, pageSize = 10 } = ctx.query;
      const offset = (page - 1) * pageSize;
      const [rows] = await pool.execute('SELECT * FROM todo LIMIT ? OFFSET ?', [Number(pageSize), Number(offset)]);
      ctx.body = { message: '查询分页成功', data: rows };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: '查询分页失败', error: error.message };
    }
  }
}
module.exports = new TodoListController()