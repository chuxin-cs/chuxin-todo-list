class authMiddleware {
  constructor() {}

  test(ctx, next){
    console.log("测试一下，会进入到这一层")
    next();
  }
}

module.exports = new authMiddleware();