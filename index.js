
//import express, body-parser
const express = require('express');
const bodyParser =require("body-parser");

const {listBooksController,createBookController,updateBookController,deleteBookController}= require('./controllers');



//create express server instance

const server=express();


//Middlewares

server.use(bodyParser.json());



//routes
// view books-get method
server.get('/book',listBooksController);

//create a book-post method

server.post('/book',createBookController );

//update book-put method

server.put('/book', updateBookController);


//delete book-delete method

server.delete('/book', deleteBookController)



//start server
server.listen(5000, ()=>console.log('server is ready'));  




