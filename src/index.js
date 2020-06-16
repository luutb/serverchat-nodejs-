var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var database = require("./database");
var routes = require("./routes");
var jwt = require("./middlewares/jwt");
var cors = require("./middlewares/cors");
app.use(bodyParser.json());
app.use(jwt.middleware);
app.use(cors);
routes(app);

module.exports = async function () {
  var db = await database();
  global.sql = db;
  var server = app.listen(8000, function () {
    console.log("Server connection....");
  });
};
