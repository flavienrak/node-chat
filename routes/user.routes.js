const router = require("express").Router();
const userController = require("../controllers/auth.controller.js");

router.get("/", userController.signIn);

module.exports = router;
