const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const {
  NOT_FOUND_ERROR_CODE,
  BAD_REQUEST_ERROR_CODE,
  INTERNAL_SERVER_ERROR_CODE,
} = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "696bceb0a60f9dd5abc08e5a",
  };
  next();
});
app.use("/", mainRouter);

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.name === "ValidationError") {
    return res
      .status(BAD_REQUEST_ERROR_CODE)
      .send({ message: "Validation Error" });
  }
  if (err.name === "CastError") {
    return res
      .status(BAD_REQUEST_ERROR_CODE)
      .send({ message: "Invalid item ID" });
  }
  if (err.name === "DocumentNotFoundError") {
    return res.status(NOT_FOUND_ERROR_CODE).send({ message: "Item not found" });
  }
  return res
    .status(INTERNAL_SERVER_ERROR_CODE)
    .send({ message: "An internal server error occurred" });
};

app.use(errorHandler);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
