const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var fs = require("fs")
const json=require("./Plants.json")
const app = express();

const Schema = mongoose.Schema;
const StringId = Schema.StringId;

const UserSchema = new Schema({
  firstname: String,
  surname: String,
  mail: String,
  password: String,
});

const PlantSchema = new Schema({
  Nazwapolska: String,
  Nazwalacina: String,
  idgatunku: Number,
  nawozenie: String,
  podlewanie: String,
  stanowisko: String,
  szkodniki: String,
  temperatura: String,
  wilgotnosc_lato: String,
  wilgotnosc_zima: String,
  przesadzanie: String,
});

const User = mongoose.model("User", UserSchema);
const Plant = mongoose.model("Plant", PlantSchema);


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

app.get("/plants/:idgatunku", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.idgatunku});
  res.json(plant);
});

app.get("/plants/:Nazwapolska", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.Nazwapolska});
  res.json(plant);
});

app.get("/plants/:Nazwalacina", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.Nazwalacina});
  res.json(plant);
});
app.get("/plants/:nawozenie", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.nawozenie});
  res.json(plant);
});
app.get("/plants/:szkodniki", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.szkodniki});
  res.json(plant);
});
app.get("/plants/:podlewanie", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.podlewanie});
  res.json(plant);
});
app.get("/plants/:stanowisko", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.stanowisko});
  res.json(plant);
});
app.get("/plants/:temperatura", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.temperatura});
  res.json(plant);
});
app.get("/plants/:wilgotnosc_lato", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.wilgotnosc_lato});
  res.json(plant);
});
app.get("/plants/:wilgotnosc_zima", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.wilgotnosc_zima});
  res.json(plant);
});
app.get("/plants/:przesadzanie", async (req, res) => {
  const plant = await Plant.find({idgatunku: req.params.przesadzanie});
  res.json(plant);
});

app.get("/plants", async (req, res) => {
  const plant = await Plant.find();
  res.json(plant);
});

app.get("/img/:id", async(req, res) =>{
  const chunks = [];
  const plantFilename = req.params.id + ".jpg";
  var gridfsbucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db,{
    bucketName:'plants_images'
  });
  gridfsbucket.openDownloadStreamByName(plantFilename)
          .pipe(fs.createWriteStream(plantFilename))
          .on('error', ()=>{
              console.log("Some error occurred in download:"+error);
              res.send(error);
          })
          .on('finish', ()=>{
              console.log("Done downloading ");
              //res.status(200).json({message:'Done Downloading'});
              //res.send(body);
          });

  var readableStream = gridfsbucket.openDownloadStreamByName(plantFilename);
  readableStream.on('error', function (error) {
    console.log(`error: ${error.message}`);
    res.send(error);
  })

  readableStream.on("end", function () {
    console.log(chunks);
    console.log(typeof chunks);
    var bufCon= Buffer.concat(chunks);
    console.log(typeof bufCon);
    var bufConToString = Buffer.concat(chunks).toString();
    console.log(typeof bufConToString);
    console.log(bufConToString);
    res.send(bufConToString);
  });

  readableStream.on('data', (chunk) => {
      //console.log(chunk);
      chunks.push(chunk);
  })
          
});

const start = async () => {
  await mongoose.connect("mongodb://localhost/smartPlant_database");
//   Plant.insertMany(json).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });
  app.listen(3000);
  console.log(await Plant.find({ Nazwapolska: 'Adiantum' }).exec());
  console.log(await User.find({ firstname: 'Natalia' }).exec());
};

start();