const uuid = require("uuid");
const md5 = require("md5");

//SignUp
async function CheckLogin(params) {
  const sql = global.sql;
  let username = params.username;

  let password = md5(params.password);
  // console.log("password", password);
  var request = new sql.Request();
  var record = await request.query(
    `select username,uuid,fullname,dob,sex from Acc where username ='` +
      username +
      `'and password = '` +
      password +
      `'`
  );

  return record;
}

//UpdatekOnline
async function UpdateState(params) {
  const sql = global.sql;

  let uuid = params.uuid;

  let request = new sql.Request();
  let record = await request.query(
    ` UPDATE Acc set active = 'true' where uuid ='` + uuid + `'`
  );
}

async function CkechActive(params) {
  const sql = global.sql;
  let request = new sql.Request();
  let record = await request.query(
    `select * from Acc where active = 'true'`
  );
  return record;
}
const CheckAcc = (username)=>{
  let sql = global.sql;
  let request = new sql.Request();
  let record =  request.query(
   
  )
  return record;

} 
//SigIn
async function SignIn(params) {
 
  let id = uuid.v4();
  let password = md5(params.password);
 
 
  let sql = global.sql;
  let request = new sql.Request();
  let checkAcc = await request.query( `select username from Acc where username = '` + params.username + `'`)
  
  if(checkAcc.recordset.length != 0){
    return 'Tai khoan da ton tai'
  }
  
  let record = await request.query(
    `insert into Acc values('` +
      id +
      `','` +
      params.username +
      `','` +
      password +
      `','` +
      params.fullname +
      `','` +
      params.dob +
      `','` +
      params.sex +
      `','` +
      params.active +
      `')`
  );
  sql.close();
  return record;
}


//changePassword

async function ChangePassword() {}
module.exports = {
  CheckLogin,
  UpdateState,
  SignIn,
};
