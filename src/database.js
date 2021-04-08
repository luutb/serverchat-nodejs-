var sql = require("mssql");
var config = {
  user: "sa",
  password: "12345",
  server: "DESKTOP-R78IRRN",
  database: "Tesy",
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
        console.log('loix')
        reject(err);
      }
      reslove(sql);
    });
  });
};
