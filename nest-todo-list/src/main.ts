// nest.js 核心模块
import { NestFactory } from '@nestjs/core';

import path from 'node:path';

// 引入配置文件
import { ConfigService } from '@nestjs/config';
import type { ConfigKeyPaths } from './config/index.ts';

// 模块入口
import { AppModule } from './app.module';

// swagger 配置
import { setupSwagger } from './setup-swagger';

// 启动函数
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置服务
  const configService = app.get(ConfigService<ConfigKeyPaths>);
  // 这里可能会存在 undefined 所以在ts是编译不过去的 我在 tsconfig.json 中设置了 strictNullChecks: false 来解决这个问题
  const { port, globalPrefix } = configService.get('app', { infer: true });

  // 允许跨域
  app.enableCors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // 明确允许方法
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // 按需配置允许的请求头
  });

  // 全局前缀
  app.setGlobalPrefix(globalPrefix);

  // 设置静态资源文件目录
  // app.useStaticAssets({ root: path.join(__dirname, '..', 'public') })

  // 配置 swagger
  const printSwaggerLog = setupSwagger(app, configService);

  await app.listen(port, '0.0.0.0', () => {
    printSwaggerLog?.();
  });
}
bootstrap();
