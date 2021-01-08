const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

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
  const token = jwt.sign(req.body, privateKey);
  console.log(token);

  // test decoding
  // const decoded = jwt.verify(token, privateKey);
  // console.log(decoded);

  // return to client jwt if login credentials are correct
  res.json(token);
});

app.get("/getBoard", (req, res) => {
  const data = [
    {
      name: "fk",
      id: 1,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "fk",
      id: 2,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "fk",
      id: 3,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
    {
      name: "fk",
      id: 4,
      image: "https://www.bizreport.com/2011/02/03/android-logo-200x200.jpg",
    },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
