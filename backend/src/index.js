const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const Schema = mongoose.Schema;
const StringId = Schema.StringId;

const UserSchema = new Schema({
  firstname: String,
  surname: String,
  mail: String,
  password: String,
});

const GatunekSchema = new Schema({
  nazwapolska: String,
  nazwalacina: String,
  idgatunku: Number,
  nawozenie: String,
  podlewanie: String,
  stanowisko: String,
  szkodniki: String,
  temperatura: String,
  wilgotnosc_lato: Number,
  wilgotnosc_zima: Number,
  przesadzanie: String,
  gatunek: String,
});

const User = mongoose.model("User", UserSchema);
const Gatunek = mongoose.model("Gatunek", GatunekSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello-world", function (req, res) {
  res.send("Siemano");
});

//app.post("/plants", (req, res) => {
  //const plants = ["rose", "tuilp"];
  //res.json(plants);
//});

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

app.post("/Plants",  (req, res) => {
  const nazwapolska = req.body.nazwapolska;
  const nazwalacina = req.body.nazwalacina;
  const idgatunku = req.body.idgatunku;
  const nawozenie= req.body.nawozenie;
  const podlewanie = req.body.podlewanie;
  const stanowisko = req.body.stanowisko;
  const szkodniki = req.body.szkodniki;
  const temperatura = req.body.temperatura;
  const wilgotnosc_lato = req.body.wilgotnosc_lato;
  const wilgotnosc_zima = req.body.wilgotnosc_zima;
  const przesadzanie = req.body.przesadzanie;

  const gatunek = new Gatunek();
  gatunek.nazwapolska = nazwapolska;
  gatunek.nazwalacina = nazwalacina;
  gatunek.idgatunku = idgatunku;
  gatunek.nawozenie = nawozenie;
  gatunek.podlewanie = podlewanie;
  gatunek.stanowisko = stanowisko;
  gatunek.szkodniki = szkodniki;
  gatunek.temperatura = temperatura;
  gatunek.wilgotnosc_lato = wilgotnosc_lato;
  gatunek.wilgotnosc_zima = wilgotnosc_zima;
  gatunek.przesadzanie = przesadzanie;
  
  gatunek.save();
  res.json(req.body);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/Plants", async (req, res) => {
  const gatunek = await Gatunek.find();
  res.json(gatunek);
});

const start = async () => {
  await mongoose.connect("mongodb://localhost/smartPlant_database");
  app.listen(3000);
};

start();