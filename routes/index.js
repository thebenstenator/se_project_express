const router = require("express").Router();
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const { NOT_FOUND_ERROR_CODE } = require("../utils/errors");
const { login, createUser } = require("../controllers/users");

router.use("/items", clothingItemRouter);
router.use("/users", userRouter);
router.post("/signin", login);
router.post("/signup", createUser);

router.use((req, res) => {
  res
    .status(NOT_FOUND_ERROR_CODE)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
