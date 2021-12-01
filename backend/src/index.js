const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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

const SensorSchema = new Schema({
  sensor_id: Number,
  humidity: Number,
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

const UserPlantsSchema = new Schema({
  idrosliny: Number,
  nazwa: String,
  gatunek: String,
  sensor_id: Number,
  data_przesadzania: Date,
  data_nawozenia: Date,
});

const User = mongoose.model("User", UserSchema);
const Plant = mongoose.model("Plant", PlantSchema);
const Sensor = mongoose.model("Sensor", SensorSchema);
const UserPlant = mongoose.model("UserPlant", UserPlantsSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/hello-world", function (req, res) {
//   res.send("Siemano");
// });

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

app.post("/userplants", (req,res) =>
{
  const idrosliny = req.body.idrosliny;
  const nazwa = req.body.nazwa;
  const gatunek = req.body.gatunek;
  const sensor_id = req.body.sensor_id;
  const data_przesadzania=req.body.data_przesadzania;
  const data_nawozenia=req.body.data_nawozenia;
  const roslina = new UserPlant();

  roslina.idrosliny = idrosliny;
  roslina.nazwa = nazwa;
  roslina.gatunek = gatunek;
  roslina.sensor_id = sensor_id;
  roslina.data_przesadzania=data_przesadzania;
  roslina.data_nawozenia=data_nawozenia;

  roslina.save();
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

app.post("/sensors", async (req, res) => {
  const sensor = await Sensor.findOne({ sensor_id: req.body.sensor_id });
    if(sensor){
      sensor.overwrite({sensor_id: req.body.sensor_id , humidity:  req.body.humidity});
      await sensor.save();
    }
    else{
    const sensor= new Sensor();
    sensor.sensor_id=req.body.sensor_id;
    sensor.humidity=req.body.humidity;
  sensor.save();
  res.json(req.body);
    }
});

app.get("/sensors", async (req, res) => {
  const sensors = await Sensor.find();
  res.json(sensors);
});
app.get("/sensors/:sensor_id", async (req, res) => {
  const sensors = await Sensor.find({sensor_id: req.params.sensor_id});
  res.json(sensors);
});

app.get("/userplants", async (req, res) => {
  const userplants = await UserPlant.find();
  res.json(userplants);
});
app.get("/userplants/:idrosliny", async (req, res) => {
  const userplants = await UserPlant.find({idrosliny: req.params.idrosliny});
  res.json(userplants);
});

app.get("/userplants/:nazwa", async (req, res) => {
  const userplants = await UserPlant.find({nazwa: req.params.nazwa});
  res.json(userplants);
});
app.get("/userplants/:gatunek", async (req, res) => {
  const userplants = await UserPlant.find({gatunek: req.params.gatunek});
  res.json(userplants);
});
app.get("/userplants/:sensor_id", async (req, res) => {
  const userplants = await UserPlant.find({sensor_id: req.params.sensor_id});
  res.json(userplants);
});
app.get("/userplants/:data_przesadzania", async (req, res) => {
  const userplants = await UserPlant.find({data_przesadzania: req.params.data_przesadzania});
  res.json(userplants);
});
app.get("/userplants/:data_nawozenia", async (req, res) => {
  const userplants = await UserPlant.find({data_nawozenia: req.params.data_nawozenia});
  res.json(userplants);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/users/:firstname", async (req, res) => {
  const user = await Plant.find({firstname: req.params.firstname});
  res.json(user);
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

/*app.get("/userplants", async (req, res) => {
  const userplant = await UserPlant.find();
  res.json(userplant);
});

app.get("/userplants/:idrosliny", async (req, res) => {
  const userplant = await Plant.find({idrosliny: req.params.idrosliny});
  res.json(userplant);
});

app.get("/userplants/:nazwa", async (req, res) => {
  const userplant = await Plant.find({idrosliny: req.params.nazwa});
  res.json(userplantplant);
});

app.get("/userplants/:idgatunku", async (req, res) => {
  const userplant = await Plant.find({idrosliny: req.params.idgatunku});
  res.json(userplantplant);
});

app.get("/userplants/:idczujnika", async (req, res) => {
  const userplant = await Plant.find({idrosliny: req.params.idczujnika});
  res.json(userplantplant);
});*/

app.get("/plants", async (req, res) => {
  const plant = await Plant.find();
  res.json(plant);
});

const start = async () => {
  await mongoose.connect("mongodb://localhost/smartPlant_database");
//   Plant.insertMany(json).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });

/*app.post("/userplants", (req, res) => {
  const userplants = [
    {
      'idrosliny': 1,
      'nazwa': 'Marian',
      'idgatunku': 3,
    }
  ];
  res.json(userplants);
});*/

  app.listen(3000);
  console.log(await Plant.find({ Nazwapolska: 'Adiantum' }).exec());
  console.log(await User.find({ firstname: 'Natalia' }).exec());
  /* const sensor= new Sensor();
     sensor.sensor_id=1;
     sensor.humidity=25;
   sensor.save();
   const sensor2= new Sensor();
     sensor2.sensor_id=2;
     sensor2.humidity=30;
   sensor2.save();*/

   /*const userplant1 = new UserPlant();
   userplant1.idrosliny = 1;
   userplant1.nazwa = "Marian";
   userplant1.gatunek = "Zielistka";
   userplant1.sensor_id = 1;
   userplant1.data_nawozenia = '2021-11-30';
   userplant1.data_przesadzania = '2021-11-30';

   const userplant2 = new UserPlant();
   userplant2.idrosliny = 2;
   userplant2.nazwa = "Monstera salon";
   userplant2.gatunek = "Monstera Okazała";
   userplant2.sensor_id = 2;
   userplant2.data_nawozenia = '2021-11-01';
   userplant2.data_przesadzania = '2021-08-21';

   userplant1.save();
   userplant2.save();*/
};

start();