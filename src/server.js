require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connection is working");
};

connection();

// mongoose docs: https://mongoosejs.com/docs/guide.html

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

// https://mongoosejs.com/docs/models.html (look at constructing documents)
// Add a single book to the db
app.post("/books", (request, response) => {
  // Add a single book to the db
});

// https://mongoosejs.com/docs/api/model.html#Model.find()
app.get("/books", (request, response) => {
  // get all books from the db
});

// https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//              Or !!!!!!!!!!!!!!!!!!!!!
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
app.put("/books", (request, reponse) => {
  // update a single book's author by title
});

// https://mongoosejs.com/docs/guide.html - you'll have to look at the docs and figure this one out!
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});



app get("/example", (request, response) => {
response send ("Hello World");

});

app listen(5001, () => {
  console.log ("Server is running on port 5001");

})