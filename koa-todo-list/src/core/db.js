const mysql = require('mysql2/promise');
const Config = require('../config/index.js');

// 创建数据库连接池
const pool = mysql.createPool({
  host: Config.DB_HOST, // 数据库主机地址
  user: Config.DB_USER, // 数据库用户名
  password: Config.DB_PASSWORD, // 数据库密码
  database: Config.DB_NAME, // 数据库名
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = {
  pool
};