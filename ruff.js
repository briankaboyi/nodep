// console.log(global.luckyNumber)
// global.luckyNumber = 23
// console.log(global.luckyNumber)


console.log(process.platform)
console.log(process.env.USER)

const { EventEmitter } = require('stream')
// const {readFile,readFileSync} = require('fs')
const {readFile} = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt', 'utf8')
    console.log('from hello function: '+ file)
}

const eventemitter = new EventEmitter();

eventemitter.on("lunch",()=>{
    console.log('yum 🥗')
})
eventemitter.emit('lunch')


// const txt = readFileSync('./hello.txt', 'utf8')
// console.log(txt)

readFile('./hello.txt', 'utf8',(err,txt)=>{
    console.log(txt)
})
console.log('do this asap')
hello()
///////////////////////
const myModule = require('./my-module')
console.log(myModule)

////////////////////////
