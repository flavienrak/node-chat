const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");

router.post("/login", authController.signIn);
router.post("/", authController.signUp);

module.exports = router;
