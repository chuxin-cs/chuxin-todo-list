import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// todo
import { TodoEntity } from './todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

const services = [TodoService];

@Module({
  // 引入其他模块
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  // 注入控制器
  controllers: [TodoController],
  // 注入服务层，一般是提供数据给controller使用,
  providers: [...services],
  // 导出服务层，一般是提供数据给其他模块使用,
  exports: [TypeOrmModule, ...services],
})
export class TodoModule {}
