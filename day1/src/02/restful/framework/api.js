const { get } = require("http");

module.exports = {
  async init(ctx, next){
    // 根据参数 list 找模型
    const model = ctx.app.$model[ctx.params.list];
    if(model){
      ctx.list = model;
      await next();
    }else {
      ctx.body = 'no this model'
    }

  },
  async list() {
    ctx.body = await ctx.list.find({});

  },
  async get(ctx){
    ctx.body = await ctx.list.findOne({_id: ctx.params.id});
    
  }
}