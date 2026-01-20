const User = require("../models/user");
const {
  BAD_REQUEST_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  INTERNAL_SERVER_ERROR_CODE,
} = require("../utils/errors");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error(err);
      res
        .status(INTERNAL_SERVER_ERROR_CODE)
        .send({ message: "An error has occurred on the server" });
    });
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND_ERROR_CODE)
          .send({ message: "User not found" });
      }
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST_ERROR_CODE)
          .send({ message: "Invalid user ID" });
      }
      res
        .status(INTERNAL_SERVER_ERROR_CODE)
        .send({ message: "An error has occurred on the server" });
    });
};

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res
          .status(BAD_REQUEST_ERROR_CODE)
          .send({ message: "Invalid data" });
      }
      res
        .status(INTERNAL_SERVER_ERROR_CODE)
        .send({ message: "An error has occurred on the server" });
    });
};

module.exports = { getUsers, getUser, createUser };
