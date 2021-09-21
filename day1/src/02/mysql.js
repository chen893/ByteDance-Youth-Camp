(async()=>{
  const mysql = require('mysql2/promise');
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'aaa'
  }
  const connection = await mysql.createConnection(cfg);
  console.log(connection);
  // let ret = await connection.execute(`CREATE TABLE IF NOT EXISTS test`)
})()