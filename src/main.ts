const chalk = require('chalk');
const cmd = require('commander');
const config = require('../package.json');

import init from './lib/init';

const command= {
    init
};

function exec(type, ...args) {
    config.debug = args[0].debug;
    command[type](...args);
}

cmd
  .usage('<command>')
  .version(config.version)
  .description('欢迎使用开发工具');

cmd
  .command('init')
  .description('初始化组件模板')
  .action((...args) => exec('init', ...args));

cmd.command('help')
  .description('查看帮助')
  .action(() => cmd.help());

// 解析输入的参数
cmd.parse(process.argv);
if (!cmd.args.length) {

  cmd.help();
}