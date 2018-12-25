#! /usr/bin/env node
const utils = require("../common/utils")
const config = require('../config/index')
const exec = require('child_process').exec;
const rootDir = config.rootDir
const viewsDir = config.rootDir + '/src/views'
const fsExtra = require('fs-extra')
var program = require('commander');

program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, liaohui [value]', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);
// console.log(process.argv)
// if (program.peppers) console.log('  - peppers');
if (program.liaohui) {
    console.log('------', program.liaohui)
    let path = program.liaohui
    fsExtra.ensureFile(path + '/web.vue', `文件`, err => {
        consola.error(err) // => null
    })
    fsExtra.ensureFile(path + '/mobile.vue', `文件`, err => {
        consola.error(err) // => null
    })
    fsExtra.ensureFile(path + '/index.vue', `文件`, err => {
        consola.error(err) // => null
    })
    fsExtra.ensureFile(path + '/mixin.js', `文件`, err => {
        consola.error(err) // => null
    })
}

// utils.watcher(viewsDir).addDir((path)=>{
//     console.log('创建目录',path)
// fsExtra.outputFile(path+ '/web.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/mobile.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/index.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/mixin.js', `文件`, err => {
//     consola.error(err) // => null
// })
// })

// if (program.bbqSauce) console.log('  - bbq');

// fsExtra.outputFile(path+ '/web.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/mobile.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/index.vue', `文件`, err => {
//     consola.error(err) // => null
// })
// fsExtra.outputFile(path+ '/mixin.js', `文件`, err => {
//     consola.error(err) // => null
// })