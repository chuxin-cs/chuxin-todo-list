import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';



@Module({
  // 引入其他模块
  imports: [],
  // 注入控制器
  controllers: [TodoController],
   // 注入服务层，一般是提供数据给controller使用, 
  providers: [TodoService],
  // 导出服务层，一般是提供数据给其他模块使用,
  exports: [],
})
export class TodoModule {}
