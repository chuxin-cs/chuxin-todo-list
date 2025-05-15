const env = process.env

const Config = {
  // 数据库相关配置
  DB_HOST: env.DB_HOST,
  DB_PORT: env.DB_PORT,
  DB_USER: env.DB_USER,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_NAME: env.DB_NAME,

  // 应用相关配置
  APP_PORT: env.APP_PORT || 3000,
  APP_HOST: env.APP_HOST || 'localhost',

  // 其他
  STATIC_PATH: env.STATIC_PATH,
}

module.exports = Config