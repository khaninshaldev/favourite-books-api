const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre: String,
});

module.exports = mongoose.model("books", bookSchema);
