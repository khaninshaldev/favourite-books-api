const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  // Get by ID logic goes here
};

const createBook = async (req, res) => {
  const { name, author, genre } = req.body;
  const newBook = new Book({ name: name, author, genre });

  try {
    await newBook.save();

    res.status(201).json({ newBook });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  // Update by ID logic goes here
};

const deleteBook = async (req, res) => {
  // Delete by ID logic goes here
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
