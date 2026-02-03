const router = require("express").Router();
const auth = require("../middlewares/auth");

router.use(auth);

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);

module.exports = router;
