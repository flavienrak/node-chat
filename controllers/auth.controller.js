const userModel = require("../models/user.model");

module.exports.signIn = async (req, res) => {
  try {
    const body = req.body;

    const user = await userModel.create({ name: body.name, email: body.email });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports.signUp = async (req, res) => {
  try {
    const body = req.body;

    const user = await userModel.create({ name: body.name, email: body.email });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
