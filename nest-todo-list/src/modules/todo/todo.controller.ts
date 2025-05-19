import { Controller, Get,Put,Post, Delete } from '@nestjs/common';

@Controller('api/todolist')
export class TodoController {
  
  @Get('/query')
  getTodoList() {
    return 'query';
  }

  @Get("/queryPage")
  getTodoListPage() {
    return 'queryPage';
  }

  @Get('/getInfo')
  getInfo() {
    return 'getInfo';
  }

  @Post('/add')
  add(){
    return "add"
  }

  @Delete('/del')
  del(){
    return "del"
  }

  @Put('/update')
  update(){
    return "update"
  }

}
