const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  firstname: String,
  surname: String,
});

const User = mongoose.model("User", UserSchema);

app.use(bodyParser.json());

app.get("/hello-world", function (req, res) {
  res.send("Siemano");
});

app.post("/plants", (req, res) => {
  const plants = ["rose", "tuilp"];
  res.json(plants);
});

app.post("/users", async (req, res) => {
  //const firstname = req.body.firstname;
  //const surname = req.body.surname;
  const user = new User();
  // user.firstname = "firstname";
  // user.surname = "surname";
  user.save({firstname:"Szymon",surname:"Wzietek"});
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const start = async () => {
  await mongoose.connect("mongodb://localhost/smartPlant_database");
  app.listen(3000);
};

start();
