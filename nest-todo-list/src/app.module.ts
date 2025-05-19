import { Module } from '@nestjs/common';

// 配置文件
import config from '~/config'
import { ConfigModule } from '@nestjs/config'

// 业务模块
import { TodoModule } from './modules/todo/todo.module';


@Module({
  imports: [
    // 配置文件
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      // 指定多个 env 文件时，第一个优先级最高
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`, '.env'],
      load: [...Object.values(config)],
    }),

    // 业务模块
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
