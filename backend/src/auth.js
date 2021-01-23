const jwt = require("jsonwebtoken");
const { addUser, userIsValid } = require("./database");

const privateKey = "test private key";

exports.login = (username, password) => {
  let result;
  console.log(username, password);
  if (userIsValid(username, password)) {
    console.log("User is valid");
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
  console.log(result);
  return { jwt: result };
};

exports.signup = (newUser, password) => {
  // check if user already exists
  console.log(newUser, password);
  addUser(newUser, password);
  const token = jwt.sign({ newUser, password }, privateKey);
  return token;
};
