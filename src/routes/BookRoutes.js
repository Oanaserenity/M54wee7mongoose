const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

//anatomy of a route
// router.httpFunction(route, function)

module.exports = bookRouter;