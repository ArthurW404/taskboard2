const jwt = require("jsonwebtoken");
const { addUser, userIsValid, userExists } = require("./database");

const privateKey = "test private key";

// Verifies if token is valid and returns username
exports.verify = (token) => {
  // test decoding
  const decoded = jwt.verify(token, privateKey);
  console.log(decoded);
  if (decoded.username === undefined) {
    return false;
  } else {
    return decoded.username;
  }
};

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
  if (userExists(newUser)) {
    return "";
  }
  console.log(newUser, password);
  addUser(newUser, password);
  const token = jwt.sign({ newUser, password }, privateKey);
  return token;
};
