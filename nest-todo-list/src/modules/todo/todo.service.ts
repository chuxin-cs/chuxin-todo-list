// 数据库
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Injectable, NotFoundException } from '@nestjs/common';

import { paginate } from '~/helper/paginate';
import { Pagination } from '~/helper/paginate/pagination';
import { TodoEntity } from './todo.entity';

import { TodoDto, TodoQueryDto, TodoUpdateDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async query() {
    return this.todoRepository.find();
  }
}
