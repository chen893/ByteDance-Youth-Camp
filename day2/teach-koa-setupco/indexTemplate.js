// 问题驱动
// 开发思想  -小步骤
const fs = require('fs');
const ejs = require('ejs')

  function createIndexTemplate(){
  const template = fs.readFileSync('./template/index.ejs', "utf-8");

  const code = ejs.render(template, {
    router: config.middleware.router,
  });
  return code;
}

