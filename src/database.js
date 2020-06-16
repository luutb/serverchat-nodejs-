var sql = require("mssql");
var config = {
  user: "sa",
  password: "12345",
  server: "DESKTOP-CE6QCLM",
  database: "chat",
  port: 1433,
  options: {
    instanceName: "SQLEXPRESS",
    encrypt: false,
  },
};

// connect to your database
module.exports = function () {
  return new Promise((reslove, reject) => {
    sql.connect(config, function (err) {
      if (err) {
        reject(err);
      }
      reslove(sql);
    });
  });
};
