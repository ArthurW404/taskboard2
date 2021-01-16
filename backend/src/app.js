const express = require("express");
const cors = require("cors");

const { login } = require("./auth");

const app = express();
const port = 5000;

const privateKey = "test private key";

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

app.get("/boards", (req, res) => {
  const data = [
    {
      name: "1",
      id: 1,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "2",
      id: 2,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "3",
      id: 3,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "4",
      id: 4,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
