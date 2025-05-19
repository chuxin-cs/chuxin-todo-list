// 数据库
import { DataSource, DataSourceOptions } from 'typeorm'

// 数据库配置
import dotenv from 'dotenv'
import { env, envBoolean, envNumber } from '~/core/env'
import { ConfigType, registerAs } from '@nestjs/config'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: env('DB_HOST', '127.0.0.1'),
  port: envNumber('DB_PORT', 3306),
  username: env('DB_USERNAME'),
  password: env('DB_PASSWORD'),
  database: env('DB_DATABASE'),
  synchronize: envBoolean('DB_SYNCHRONIZE', false),
  multipleStatements: true,
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: ['dist/modules/**/*.subscriber{.ts,.js}'],
}

export const dbRegToken = "database";
const DatabaseConfig = registerAs( 
  dbRegToken,
  (): DataSourceOptions => dataSourceOptions,
)

export type IDatabaseConfig = ConfigType<typeof DatabaseConfig>;

