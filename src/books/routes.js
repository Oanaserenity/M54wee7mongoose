const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {addBook} = require("./controllers");

bookRouter.post("/books/addbook", addBook); 

//anatomy of a route

//bookRouter.httpMethod(route,function)
module.exports = bookRouter;

