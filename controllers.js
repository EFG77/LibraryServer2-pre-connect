

const BookModel = require('./model');


//request handlers/controlllers
const listBooksController=(req,res)=>{
    //list all books
    const books=BookModel.all();
    res.json({data:books})
   }
  
   const createBookController=(req,res)=>{
      //create a book

      const {title,author,description}= req.body;
      
      const book = new BookModel({title,author,description});

      book.save();   

      res.json({message:"created successfully", data: book});

   }
  
   const updateBookController=(req,res)=>{
      //update a book
      const {title,author,description}= req.body;

      const updatedBook = BookModel.update({title,author,description});

      res.json({message:"updated successfully", data:updatedBook});
   }
  
   const deleteBookController=(req,res)=>{
      //delete a book

      const {title}=req.body;

      const deletedBook= BookModel.delete({title});

      res.json({message:"deleted successfully", data:deletedBook})
   }



   module.exports = {
    listBooksController,
    createBookController,
    updateBookController,
    deleteBookController
   }