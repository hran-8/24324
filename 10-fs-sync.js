const {readFileSync, writeFileSync} = require('fs')
console.log('start')
// const fs = require('fs')
// fs.readFileSync 
// these above statements are the same as the assignment thing we're doing up there. 

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one')
