//自定义事件+观察者模式 场景   读取大文件字符数量，行数，流模式，监听data，一点一点读取存入变量
//其他场景
//node.js: 处理http请求，多进程通讯-----自定义事件
//vue和React组件生命周期触发-----发布订阅
//vue watch

/*
    node   http 请求的处理
 */
function serverCallback(req, res) {
    var method = req.method.toLowerCase()//获取请求的方法
    if(method === 'get'){

    }
    if(method === 'post'){
        var data = '';
        req.on('data', function (chunk) {
            data += chunk.toString()
        })
        req.on('end', function () {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
}
/*
    vue  watch
 */
//数据改变触发watch里面的观察者


/*
    看file1.txt里面一共有多少行
 */
// const fs = require('fs')
// const readline = require('readline')
//
// let rl = readline.createInterface({
//     //读取流做了一个input输入
//     input: fs.createReadStream('./data/file1.txt')
// })
// //行数
// let lineNum = 0
// //每一行都会触发
// rl.on('line', function (line) {
//     lineNum++
// })
// rl.on('close', function () {
//     console.log(lineNum,'lineNum')
// })



/*
    看file1.txt里面一共有多少个字符
 */
/*
    stream  用到自定义事件
 */
// const fs = require('fs')
// //创建一个可读流
// const readStream = fs.createReadStream('./data/file1.txt')
//
// let length = 0
// //chunk  每次流出来那一些
// readStream.on('data', function (chunk) {
//     let len = chunk.toString().length
//     console.log('len', len)
//     length += len
// })
// readStream.on('end', function () {
//     console.log('length', length)
// })



/*
    构造函数
 */
// const EventEmitter = require('events').EventEmitter
//
// // //初始化实例
// const  emitter1 = new EventEmitter()
// //监听 some 事件
// emitter1.on('some', info=> {
//     console.log('fn1', info)
// })
// //监听 some 事件
// emitter1.on('some', info=> {
//     console.log('fn2', info)
// })
//
// //触发 some 事件
// emitter1.emit('some', 'xxxx')
//
/*
    继承
 */
// class Dog extends EventEmitter{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }
//
// let simon = new Dog('simon')
// simon.on('bark', function () {
//     console.log(this.name,'barked-1')
// })
// simon.on('bark', function () {
//     console.log(this.name,'barked-2')
// })
// setInterval(function () {
//     simon.emit('bark')
// }, 1000)