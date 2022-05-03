const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
