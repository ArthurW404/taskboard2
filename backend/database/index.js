// API for accessing database interface

import {} from "./database";

const addUser = (username, password) => {
  globalVars.updated = true;
  console.log("users", db.users);
  console.log("users", typeof db);
  console.log("db", db);
  db.users.push({ username, password });
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
