const express=require('express');
const chalk=require('chalk');
const path=require('path');
const app=new express();
var nav=[{link:'/',title:'Home'},
        {link:'/login',title:'Login'},
        {link:'/signup',title:'Sign up'},
        {link:'/book',title:'Books'},
        {link:'Authors',title:'Authors'}];
var books=[
    {
        title:'War and peace',
        genre:'Historical fiction',
        author:'lev Nicolayevich'
},
{
        title:'Kalikkudukka',
        genre:'Educational ',
        author:'Diya'
},
{
        title:'Balarama',
        genre:'Childrens classic',
        author:'Farhana'
}]
const bookRouter=express.Router();



    app.use(express.static(path.join(__dirname,"/public")));
    app.use('/book',bookRouter);
    app.set('views','./src/views');
    app.set('view engine','ejs')   //ejs is the view engine we are using
    bookRouter.route('/')
    .get(function(req,res){
        res.render(
            'book',
            {
               nav,
             title:'Books',
             books
            }
        )
    })
    app.get('/', function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
    });  //
    

})
app.listen(3000, function(){
    console.log("listening to port"+chalk.green('3000'))
});