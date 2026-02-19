const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");
const {
  validateCardBody,
  validateItemId,
} = require("../middlewares/validation");

router.get("/", getClothingItems);

router.post("/", auth, validateCardBody, createClothingItem);

router.delete("/:itemId", auth, validateItemId, deleteClothingItem);

router.put("/:itemId/likes", auth, validateItemId, likeClothingItem);

router.delete("/:itemId/likes", auth, validateItemId, dislikeClothingItem);

module.exports = router;
