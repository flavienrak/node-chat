const express = require("express");
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
const jwtRoutes = require("./routes/jwt.routes.js");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/jwt", jwtRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Port: ${process.env.PORT}`);
});
