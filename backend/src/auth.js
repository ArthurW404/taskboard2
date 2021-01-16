const jwt = require("jsonwebtoken");
const { addUser, userIsValid } = require("./database");

exports.login = (username, password) => {
  let result;
  console.log(username, password);
  if (userIsValid(username, password)) {
    const token = jwt.sign({ username, password }, privateKey);
    console.log(token);

    // test decoding
    const decoded = jwt.verify(token, privateKey);
    console.log(decoded);

    // return to client jwt if login credentials are correct
    result = token;
  } else {
    result = "";
  }
  return result;
};
