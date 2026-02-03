const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems);

router.post("/", auth, createClothingItem);

router.delete("/:itemId", auth, deleteClothingItem);

router.put("/:itemId/likes", auth, likeClothingItem);

router.delete("/:itemId/likes", auth, dislikeClothingItem);

module.exports = router;
