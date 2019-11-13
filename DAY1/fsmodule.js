const fs=require('fs')
// const files=fs.readdirSync('./')
// console.log(files)


// const asyncfile=fs.readdir('./',function(err,files){
//     if(err) console.log('error',err);
//     else console.log('result',asyncfile)
// })



// //reading file synchronously
// var data=fs.readFileSync('dummyfile.txt','utf8');
// console.log(data);

// var data=fs.readFile('dummyfile.txt','utf8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// });

var file=fs.writeFileSync('newfile.txt','farhana','utf8');



var file=fs.writeFile('newfile.txt','diya',function(err){
    if(err) console.log(err);
    else console.log("write operation completed")
})