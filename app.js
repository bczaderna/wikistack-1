const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout.js");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

const port = app.listen(1337, () => {
  console.log(`App listening in port: ${1337}`);
});
