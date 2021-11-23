const http = require('http');
const fs = require('fs');
http.createServer((request, response)=>{
  console.log("a request");
  // response.end('i Node');
  const { url, method, headers} = request;
  if(url=='/' && method ==='GET'){
    fs.readFile('index.html', (err, data) =>{
      if(err){
        console.log('test')
        response.writable(500, {
          'Content-Type': 'text/plain;'
        })
        response.end("500 ");
        return ;
      }
      else{
        console.log(data)
        response.statusCode = 200;
        // response.setHeader('Content-Type', 'text/plain');
        response.end(data);
      }
    })
  }
  else if(method==="GET" && url==='/users') {
    response.writable(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify({name: 'tom'}))
  }
  else if( method=='GET' && headers.accept.indexOf('image/*')!==-1){
    // 所有的图片
    // 直接用readFile 读取， 把全部内容加载到服务器，
    fs.createReadStream('.'+url).pipe(response)

  }
}).listen(3001, ()=>{
  console.log('server')
})

