// not using database to store data for now

const fs = require("fs");
const dbFolder = "db"; // Currently, db folder must be manually created in backend/ folder
const dbName = dbFolder + "/db.json";
console.log(dbName);
let globalVars = {
  updated: false,
};

const createNewFile = (filename, data) => {
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) console.error(err);
  });
};

function checkFileExistsSync(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
  } catch (e) {
    flag = false;
  }
  return flag;
}

// get data
let db;
if (checkFileExistsSync(dbName)) {
  const rawData = fs.readFileSync(dbName, "utf-8");
  console.log(rawData);
  db = JSON.parse(rawData);
} else {
  db = {
    users: [],
  };
  createNewFile(dbName, db);
}

// end getting data

const save = (data, filename) => {
  if (globalVars.updated) {
    console.log("saving data");

    fs.writeFile(filename, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  globalVars.updated = false;
};

setInterval(() => save(db, dbName), 1000);

const addUser = (username, password) => {
  globalVars.updated = true;
  console.log("users", db.users);
  console.log("users", typeof db);
  console.log("db", db);
  db.users.push({ username, password });
  console.log("users", db.users);
  // create new file for user's stuff
  createNewFile(dbFolder + "/" + username + ".json", { boards: [] });
};

const userIsValid = (username, password) => {
  let isValid = false;
  db.users.forEach((user) => {
    if (user.username === username && user.password === password) {
      isValid = true;
    }
  });
  return isValid;
};

const userExists = (username) => {
  let isExist = false;
  db.users.forEach((user) => {
    if (user.username === username) {
      isExist = true;
    }
  });
  return isExist;
};

// given an user, return all data for user
const getUserData = (username) => {
  const fileName = dbFolder + "/" + username + ".json";
  const rawData = fs.readFileSync(fileName, "utf-8");
  const processedData = JSON.parse(rawData);
  console.log(processedData);
  return processedData;
};

const saveUserData = (username, data) => {
  const fileName = dbFolder + "/" + username + ".json";
  fs.writeFileSync(fileName, data, "utf-8");
};

// API for accessing database interface

exports.userIsValid = userIsValid;
exports.addUser = addUser;
exports.userExists = userExists;
exports.getUserData = getUserData;
exports.saveUserData = saveUserData;
