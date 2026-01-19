const router = require("express").Router();

const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

router.use("/items", clothingItemRouter);

router.use("/users", userRouter);

router.use((req, res) => {
  res
    .status(NOT_FOUND_ERROR_CODE)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
