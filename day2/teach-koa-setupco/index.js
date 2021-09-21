
let   {createIndexTemplate} = require('./indexTemplate') ;
// import fs from 'fs'
let fs = require('fs')
// 核心： 自动化思维
// 1.创建文件夹
// 2. 创建了index.js
// 3.创建了package.json
// 4.安装依赖


const inputConfig = {
  middleware: {
    router: true,
  }
}



console.log('test')
// fs.mkdirSync('haha');

fs.mkdirSync(getPath());
fs.writeFileSync(getPath()+'/index.js', createIndexTemplate(inputConfig))


function getPath(){
  return './haha'
}


