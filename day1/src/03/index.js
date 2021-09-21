const http = require('http');
const session = {};


http.createServer((req,res)=>{
  console.log('coolie: ', req.headers.cookie);
  res.setHeader('Set-Cookie', 'abc=123;')
  const sess
  res.end('Hello');
}).listen(3002)