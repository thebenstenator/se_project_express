const router = require("express").Router();
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems);

router.post("/", createClothingItem);

router.delete("/:itemId", deleteClothingItem);

router.put("/:itemId/likes", likeClothingItem);

router.delete("/:itemId/likes", dislikeClothingItem);

module.exports = router;
