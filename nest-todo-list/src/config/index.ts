import { appRegToken, IAppConfig, AppConfig } from './app.config';
import { dbRegToken, IDatabaseConfig, DatabaseConfig } from './database.config';
// import { mailerRegToken, IMailerConfig } from './mailer.config';
// import { redisRegToken, IRedisConfig } from './redis.config';
// import { securityRegToken, ISecurityConfig } from './security.config';
import {
  swaggerRegToken,
  ISwaggerConfig,
  SwaggerConfig,
} from './swagger.config';
// import { ossRegToken, IOssConfig } from './oss.config';

export * from './app.config';
export * from './database.config';
// export * from './mailer.config';
// export * from './oss.config';
// export * from './redis.config';
// export * from './security.config';
export * from './swagger.config';

export interface AllConfigType {
  [appRegToken]: IAppConfig;
  [dbRegToken]: IDatabaseConfig;
  //   [mailerRegToken]: IMailerConfig
  //   [redisRegToken]: IRedisConfig
  //   [securityRegToken]: ISecurityConfig
  [swaggerRegToken]: ISwaggerConfig;
  //   [ossRegToken]: IOssConfig
}

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>;

export default {
  AppConfig,
  DatabaseConfig,
  SwaggerConfig,
};
