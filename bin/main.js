#!/usr/bin/env node

// const download = require('download-git-repo')
//
// console.time('下载耗时')
//
// download('zm-1006/home', 'dev', err=>{
//     if (!err) {
//         console.log('download success')
//         console.timeEnd('下载耗时')
//     }
// });

const { Command } = require('commander')
const program = new Command()
program.version('0.0.5')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

const options = program.opts()
if (options.debug) console.log(options)
console.log('pizza details:')
if (options.small) console.log('- small pizza size')
if (options.pizzaType) console.log(`- ${options.pizzaType}`)
