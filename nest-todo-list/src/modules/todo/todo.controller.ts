import { Controller, Get, Put, Post, Delete } from '@nestjs/common';

import { TodoEntity } from './todo.entity'
import { TodoService } from './todo.service'
import { Pagination } from '~/helper/paginate/pagination';

import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiResult } from '~/common/decorators/api-result.decorator'


@ApiTags('Business - Todo模块')
@Controller('todolist')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '获取Todo列表' })
  @ApiResult({ type: [TodoEntity] })
  @Get('/query')
  query() : Promise<Pagination<TodoEntity>> {
    return this.todoService.query();
  }

  @ApiOperation({ summary: '获取Todo列表分页' })
  @Get('/queryPage')
  queryPage() {
    return 'queryPage';
  }

  @ApiOperation({ summary: '获取Todo信息' })
  @Get('/getInfo')
  getInfo() {
    return 'getInfo';
  }

  @ApiOperation({ summary: '添加Todo' })
  @Post('/add')
  add() {
    return 'add';
  }

  @ApiOperation({ summary: '删除Todo' })
  @Delete('/del')
  del() {
    return 'del';
  }

  @ApiOperation({ summary: '更新Todo' })
  @Put('/update')
  update() {
    return 'update';
  }
}
