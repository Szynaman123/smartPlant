const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  firstname: String,
  surname: String,
  mail: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello-world", function (req, res) {
  res.send("Siemano");
});

app.post("/plants", (req, res) => {
  const plants = ["rose", "tuilp"];
  res.json(plants);
});

app.post("/users",  (req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const mail= req.body.mail;
  const password= req.body.password;
  const user = new User();
  user.firstname = firstname;
  user.surname = surname;
  user.mail = mail;
  user.password = password;
  
  user.save();
  res.json(req.body);
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
