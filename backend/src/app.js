const express = require("express");
const cors = require("cors");

const { login, signup } = require("./auth");
const { getBoards, addBoard } = require("./boards");

const app = express();
const port = 5000;

app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get("/", (req, res) => {
  res.send("World!");
});

app.post("/login", (req, res) => {
  // check user is valid
  const { username, password } = req.body;
  res.json(login(username, password));
});

app.post("/signup", (req, res) => {
  // check user
  const { newUser, password } = req.body;
  res.json(signup(newUser, password));
});

app.get("/boards", (req, res) => {
  const query = req.query;
  console.log("token => ", query.token);
  const data = getBoards(query.token);
  //  [
  //   {
  //     name: "1",
  //     id: 1,
  //     image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
  //   },
  //   {
  //     name: "2",
  //     id: 2,
  //     image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
  //   },
  //   {
  //     name: "3",
  //     id: 3,
  //     image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
  //   },
  //   {
  //     name: "4",
  //     id: 4,
  //     image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
  //   },
  // ];
  // getBoards(query.token);
  console.log(data);

  res.json(data);
});

app.post("/addBoard", (req, res) => {
  const { token, board } = req.body;
  const result = addBoard(token, board);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
