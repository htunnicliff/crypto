const crypto = require("crypto");

module.exports = (req, res) => {
  const size = +req.query.size || 8;

  const key = crypto.randomBytes(size).toString("hex");
  const iv = crypto.randomBytes(size).toString("hex");

  res.json({ key, iv });
};
