const jwt = require("jsonwebtoken");

module.exports.verifyJWT = async (req, res) => {
  try {
    const { token } = req.params;

    const verify = jwt.verify(token, process.env.JWT_KEY);
    return res.status(200).json({ verify });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
