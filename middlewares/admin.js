const admin = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role == "admin") {
    next();
  } else {
    return res.json({
      status: 401,
      message: "its admin area access denied for customer",
    });
  }
};

module.exports = admin;
