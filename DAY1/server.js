var http=require('http')
// http.createServer(function(req,res){
//     res.write("<h1>hello world</h1>")
//     res.end('welcome');
// })
// .listen(3001)


var server=http.createServer(function(req,res){
    res.write("hi")
}).listen()
console.log(server)