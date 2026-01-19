const router = require("express").Router();

const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

router.use("/items", clothingItemRouter);

router.use("/users", userRouter);

module.exports = router;
