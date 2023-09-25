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
    if (authHeader.slice(0, 6) === "Bearer") {
      const user = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET);
      req.user = user;
      next();
    } else {
      return res.json({
        status: 400,
        message: "invalid token",
      });
    }
  } catch (err) {
    return res.json({
      status: 400,
      err: err.message,
    });
  }
};

module.exports = auth;
