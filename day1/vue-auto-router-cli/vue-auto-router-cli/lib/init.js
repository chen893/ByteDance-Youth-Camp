// 打印欢迎界面

const {promisify} = require('util');
const figlet = promisify(require('figlet'))
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content))
const {clone} = require('./download');
const { spawn } = require('child_process');


const spawn = async(...args) =>{
  const {spawn} = require('child_process');
  return new Promise(resolve=>{
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', ()=>{
      resolve();
    })
  })
}

module.exports = async name =>{
  clear();
  const data = await figlet("kkb Welcome");
  log(data)
  log('🚀创建项目'+name);
  await clone('github:su37josephxia/vue-template', name);

  spawn('npm', ['install']);


  log('安装依赖...');
  await spawn('npm', ['install'], {cwd: `./${name}`} )
  // 同步 Promiseapi
  // 输出流
}