const { verify } = require("./auth");
const { getUserData, saveUserData } = require("./database");

const getBoards = (token) => {
  const username = verify(token);
  if (!username) {
    // case where token is invalid
    return;
  }
  //   const fileName = dbFolder + "/" + username + ".json";
  const userData = getUserData(username);
  return userData.boards;
};

/**
 * board must be in form
 *      {
 *          name,
 *          img
 *      }
 */
const addBoard = (token, board) => {
  const username = verify(token);
  if (!username) {
    // case where token is invalid
    return false;
  }
  //   const fileName = dbFolder + "/" + username + ".json";
  const userData = getUserData(username);
  userData.boards.push(board);
  saveUserData(username, userData);
  return true;
};

exports.getBoards = getBoards;
exports.addBoard = addBoard;
