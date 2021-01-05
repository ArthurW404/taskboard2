const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getBoard", (req, res) => {
  const data = [
    {
      name: "fk",
      id: 1,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 2,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 3,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 4,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 5,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 6,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 7,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
    {
      name: "fk",
      id: 8,
      image: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
