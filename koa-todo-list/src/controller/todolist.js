class TodoListController {
  constructor() { }
  add(ctx) {
    ctx.body = {
      code: 200,
      msg: "添加成功",
      data: {}
    }
   }
  del(ctx) { 
    ctx.body = {
      code: 200,
      msg: "删除成功",
      data: {}
    }
  }
  update(ctx) {
    ctx.body = {
      code: 200,
      msg: "修改成功",
      data: {}
    }
   }
  query(ctx) { 
    ctx.body = {
      code: 200,
      msg: "查询成功",
      data: {b:"2"}
    }
  }
  queryPage(ctx) { 
    ctx.body = {
      code: 200,
      msg: "分页查询成功",
      data: {"a":1}
    }
  }
}
module.exports = new TodoListController()