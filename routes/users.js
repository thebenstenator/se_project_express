const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser, updateCurrentUser } = require("../controllers/users");
const { validateUserUpdate } = require("../middlewares/validation");

router.use(auth);

router.get("/me", getCurrentUser);
router.patch("/me", validateUserUpdate, updateCurrentUser);

module.exports = router;
