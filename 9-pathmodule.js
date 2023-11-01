const path = require('path')

console.log(path.sep)

const filePath = path.join('/content////', 'subsdfsfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve('content', 'subfolder', 'test.txt', 'bubba/')
console.log(absolute)