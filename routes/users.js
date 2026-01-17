const router = require("express").Router();
const User = require("../models/user");
const { getUsers, getUser, createUser } = require("../controllers/users");

router.get("/", getUsers);

router.get("/:userId", getUser);

router.post("/", createUser);

module.exports = router;
