// import main packages

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// create the express app

const app = express();

// built in middlewares

app.use(bodyParser.json());
// to support JSON-encoded bodies  api / post man
// can also use express.json()

// to support URL-encoded bodies / from websites
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for serving static files

app.use(express.static(path.join(__dirname, "public")));

// custom middleware

// connect to remote database or localhost

mongoose
  .connect("mongodb://localhost:27017/phonebook", { useNewUrlParser: true })
  .then(() => console.log("successfully connected to mlab..."))
  .catch((err) => console.log("mongodb connect error ....", err));

// require routes

require("./routes/phoneBook")(app);

// main route

app.get("/", (req, res) => {
  // serving the static html files here in public folder

  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// send 404 if not found

app.get("*", function (req, res) {
  res.send("Page / route not Found").status(404);
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listeing on  ... ${port}`));
