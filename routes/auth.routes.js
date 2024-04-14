const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");

router.get("/", authController.signIn);
router.post("/", authController.signUp);

module.exports = router;
