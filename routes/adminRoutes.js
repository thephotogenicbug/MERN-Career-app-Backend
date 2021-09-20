const express = require("express");
const { registerAdmin, authAdmin } = require("../controllers/adminController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerAdmin);
router.route("/loginadmin").post(authAdmin);

module.exports = router;
