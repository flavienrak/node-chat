const router = require("express").Router();
const jwtController = require("../controllers/jwt.controller.js");

router.get("/:token", jwtController.verifyJWT);

module.exports = router;
