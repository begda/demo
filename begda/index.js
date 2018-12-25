#!/usr/bin/env node
var program = require('commander');
// console.log(program)
require('./src/build/index')
program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, liaohui', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);


if (program.peppers) console.log('  - peppers');
if (program.liaohui) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
// console.log(process.argv);
// require('./src/build/index')
// console.log('asdfasdf');