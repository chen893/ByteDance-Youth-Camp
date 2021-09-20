const fs = require('fs');
const http = require('http');

http.createServer((request, response)=>{
  response.end('test');
}).listen(3005, ()=>{
  console.log("server")
})