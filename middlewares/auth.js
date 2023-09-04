const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: "unauthorized",
    });
  }
  try {
    const user = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.json({
      status: 400,
      err: err.message,
    });
  }
};

module.exports = auth;
