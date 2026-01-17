const router = require("express").Router();
const User = require("../models/user");

router.get("/users", (req, res) => {
  User.find({});
});

module.exports = router;
