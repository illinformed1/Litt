const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const yelp = require("./routes/yelp");

app.get("/", (req, res) => {
  res.send("woop");
  console.log("endpoint reached");
});

app.use("/yelp", yelp);

app.listen(8080);
console.log("app is listening on port 8080");
