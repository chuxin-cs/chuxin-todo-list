class AuthMiddleware {
  async test(ctx, next){
    console.log("测试一下，会进入到这一层")
    await next();
  }
}

module.exports = new AuthMiddleware();