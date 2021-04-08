var jwt = require("jsonwebtoken");
var privateKey = "nguyenbaluu123";
var getToken = (req, res) => {
  let token = jwt.sign(
    {
      username: req.username,
      fullname: req.fullname,
      uuid: req.uuid,
    },
    privateKey,
    { algorithm: "HS256" }
  );

  return token;
};

const middleware = (req, res, next) => {
  var token = req.header("Authorization");
  console.log("token", token);
  if (req.url == "/api/login/" || req.url == "/api/signin/") {
    next();
  } else {
    if (!token) {
      res.sendStatus(401);
    } else {
      console.log("next");
      next();
    }
  }
};

module.exports = {
  getToken,
  middleware,
};
