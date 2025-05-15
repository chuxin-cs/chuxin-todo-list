const path = require('path');
// 读取.env 文件环境变量
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});
// 启动应用
require("./src/app.js")