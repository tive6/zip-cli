#!/usr/bin/env node

const AdmZip = require('adm-zip')
const path = require('path')
const { Command } = require('commander')
const { version } = require('../package.json')
const { argv, cwd, exit } = process

const program = new Command()
program.version(version, '-v, --version', 'output the current version')
program
  .name('zip')
  .usage('[options]')
  .option('-n, --name <filename>', 'zip filename')
  .option('-h, --help', 'view help information')
  .parse(argv)

const options = program.opts()
const args = program.args

// zip -h
if (options.help) {
  program.help()
}

// zip -v
if (options.version) {
  console.log(version)
  exit(1)
}

// zip .
if (args[0] === '.') {
  const currentDir = path.relative('../', cwd())
  zipHandle(currentDir)
}

// zip -n filename
if (options.name && typeof options.name !== 'boolean') {
  const { name } = options
  zipHandle(name)
} else {
  program.help()
}

function zipHandle(dir) {
  console.time('zip打包耗时')
  let ver = Date.now().toString().slice(6)
  const t = new Date()
  const month = t.getMonth() + 1
  const day = t.getDate()
  const date = `${t.getFullYear()}${month > 9 ? month : `0${month}`}${
    day > 9 ? day : `0${day}`
  }`
  const filename = `${dir}-${date}-${ver}.zip`
  const zip = new AdmZip()
  zip.addLocalFolder('./')
  zip.writeZip(`./${filename}`)
  console.log(`${filename} 打包完成`)
  console.timeEnd('zip打包耗时')
  exit(1)
}
