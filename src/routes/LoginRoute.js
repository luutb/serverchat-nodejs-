var LoginController = require("../controllers/LoginController");

module.exports = function (app) {
  app.post("/api/login/", LoginController.CheckLogin);
  app.post("/api/signin/", LoginController.SignIn);
};
