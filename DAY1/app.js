// function newFn(a,b){
//     // var a=10;
//     // var b=5;
//     return(a*b) ;
// }
// console.log(newFn(1,3));




// var logger=require('./logger.js');
// logger("hello")  //here logger is a variable,which is a called function logger



// var logger=require('./logger.js');   //here logger has 2 objects viz display(function print) and link(url)
// logger.display("Hello");
// console(logger.link)  //

// var date=require('./dateModule')
// console.log(date.myDate()) ;
// console.log(date.myDate);
var os=require('os');
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.type())
console.log(os.platform())
console.log(os.release())
console.log(os.loadavg())