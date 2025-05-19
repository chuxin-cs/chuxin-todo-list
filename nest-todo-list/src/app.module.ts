import { Module } from '@nestjs/common';

// 配置文件
import config from '~/config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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

    // 数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '119.91.239.178',
      port: 3306,
      username: 'nest_admin',
      password: 'fWBcPfAzw3KDnKAB',
      database: 'nest_admin',
      synchronize: false,
      multipleStatements: true,
      entities: [
        'dist/modules/**/*.entity{.ts,.js}'
      ],
      // migrations: ['dist/migrations/*{.ts,.js}'],
      // subscribers: ['dist/modules/**/*.subscriber{.ts,.js}'],
    }),

    // 业务模块
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
