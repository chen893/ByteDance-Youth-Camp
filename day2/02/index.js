const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const path = require('path')
app.use((ctx)=>{
  const url = ctx.request.url;
  console.log(url);
  if(url === '/'){
    ctx.body = fs.readFileSync("./index.html", "utf-8");
  }else if(url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1));
    ctx.type = "text/ja"
  }
})