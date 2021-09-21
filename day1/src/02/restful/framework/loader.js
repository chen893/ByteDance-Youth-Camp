const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')

// 加载器  文件
/**
 * 加载器
 * @param {*} dir 文件夹 
 * @param {*} cd 
 */
function load(dir, cd){
  const url = path.resolve(__dirname, dir);
  const files = fs.readdirSync(url);
  files.forEach(filename=>{
    filename = filename.replace('.js', '');
    const file = require(url + '/' + filename);
    cd (filename, file);
  })
}

const loadModel = config =>app =>{
  mongoose.connect(config.db.url, config.db.options)
  const conn = mongoose.connection;
  conn.on('error', ()=>console.log("数据库连接失败"));
  app.$model = {};
  load('../model', (filename, {schema})=>{
    console.log('load model:'+ filename, schema);
    app.$model[filename] = mongoose.model(filename, schema);

  })
}

module.exports = {
  loadModel
}