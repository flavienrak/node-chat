const userModel = require("../models/user.model");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
