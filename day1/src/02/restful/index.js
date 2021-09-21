// /api/user GET
// /api/user/1 GET
// /api/users/POST PUT DELETE

const { Router } = require('express');
const Koa = require('koa');
const app = new Koa();


const config = require('./conf');
const {loadModel} = require('./framework/loader');
loadModel(config)(app)

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const restful = require('./framework/router');
app.use(restful)


// 代码生成器
//  动态编程
//    1.根据模型文件 自动加载模型
//    2.自动产生路由 -- 
// router.
app.listen(3000, ()=>{
  console.log('Server at 3000');
})