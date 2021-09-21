const fs = require('fs');
const http = require('http');

http.createServer((resquire, response)=>{
  fs.readFile('indaex.html', (err, data)=>{
    if(err) {
      response.end('error');
    }else{
      response.end(data)
    }
  })
  response.end('Hello Wold');
}).listen(3002, ()=>{
  console.log("server")
})