require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

// mongoose docs: https://mongoosejs.com/docs/guide.html


const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

// https://mongoosejs.com/docs/models.html (look at constructing documents)
// Add a single book to the db

  


// https://mongoosejs.com/docs/api/model.html#Model.find()
app.get("/books/getallbooks",async (request, response) => {
  // get all books from the db
  const books = await Book.find({});//sends request to db and gets back response
  response.send({ message:"success all the books", books: books}); //this is sent to client before response gets back from db
  
  
});
app.get("/getFirstBook", async (request, response) => {
  //get first book
  //const book = await Book.find(book.[0]});
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", async(request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
app.delete("/books", async(request, response) => {
  //await Book.deleteOne9{});
  const book = await Book.deleteOne({ title: request.body.title});
});





app.get("/example", (request, response) => {
response.send("Hello World");

});

app.listen(5001, () => {
  console.log ("Server is running on port 5001");

})