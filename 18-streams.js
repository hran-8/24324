const {createReadStream} = require('fs');

const stream = createReadStream('./content/big-file.txt', {highWaterMark: 90000, encoding: 'utf8'});

// default 64kb
// laster buffer - remainder 
// highWaterMark - control size
// const stream = createReadStream('./content/big-file.txt', {highWaterMark: ###});
// const stream = createReadStream('./content/big-file.txt', {options: value, options2:value})

stream.on('data', (result)=>{
    console.log(result)
})    

stream.on('error', (err)=>{
    console.log(err)
})
