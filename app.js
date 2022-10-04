require("dotenv").config();
const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./src/routes/booksRoutes");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/books/", bookRouter);

app.listen(PORT, () =>
  console.log(`Server is now running on localhost:${PORT}`)
);

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("Connected to database successfully!"))
  .catch((err) => console.log(err.message));
