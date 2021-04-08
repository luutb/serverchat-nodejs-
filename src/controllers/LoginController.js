var middlewares = require("../middlewares/jwt");
var LoginServices = require("../services/LoginServices");

function CheckLogin(req, res) {
  LoginServices.CheckLogin(req.body)
    .then(async (result) => {
      let data = result.recordset[0];
      let token = middlewares.getToken(data);

      let results = [
        {
          code: 200,
          data: data,
          token: token,
          message: "success",
        },
      ];
      console.log("controller", results);
      await res.status(200).send(results);
      setState(data);
    })
    .catch((error) => {
      res.send(error);
    });
}

const setState = (params) => {
  LoginServices.UpdateState(params)
    .then((result) => {
      console.log("update thanh cong");
    })
    .catch((err) => {
      console.log(err);
    });
};

const SignIn = (req, res) => {

  LoginServices.SignIn(req.body)
    .then((result) => {
      console.log("thanh cong",result);
    })
    .catch((err) => {
      console.log("that bai",err);
    });
};
module.exports = {
  CheckLogin,
  SignIn,
};
