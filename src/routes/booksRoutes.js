const router = require("express").Router();
const controllers = require("../controllers/booksControllers");
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } =
  controllers;

router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/", createBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
