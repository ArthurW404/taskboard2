// not using database to store data for now

const fs = require("fs");
const dbName = "db.json";

let globalVars = {
  updated: false,
};

const createNewFile = (filename) => {
  fs.writeFile(filename, JSON.stringify({}), (err) => {
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
  rawData = fs.readFileSync(dbName, "utf-8");
  db = JSON.parse(rawData);
} else {
  createNewFile(dbName);
  db = {
    users: [],
  };
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

// const addUser = (username, password) => {
//   globalVars.updated = true;
//   console.log("users", db.users);
//   console.log("users", typeof db);
//   console.log("db", db);
//   db.users.push({ username, password });
// };

// const userIsValid = (username, password) => {
//   let isValid = false;
//   db.users.forEach((user) => {
//     if (user.username === username && user.password === password) {
//       isValid = true;
//     }
//   });
//   return isValid;
// };

// exports.userIsValid = userIsValid;
// exports.addUser = addUser;
