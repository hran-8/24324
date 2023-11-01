const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=>{
    console.log(`data received`);
});
customEmitter.on('response', (name, id)=>{
    console.log(`Hello, my name is ${name} and my id is ${id}`)
})


customEmitter.emit('response', 'hey', 32);

