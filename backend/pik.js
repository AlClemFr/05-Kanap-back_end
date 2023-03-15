//o- vérification OK

//v- Importation librairie/Dictionnaire.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// let url_mongodb = "";

//j- teste dotenv
// if (true) {
const dotenv = require("dotenv");
dotenv.config();

// url_mongodb = process.env.url_mongodb;
const url_mongodb = process.env.url_mongodb;
// };


//v- importation du modèle déclarer dans fichier sauce & user .js 
//j- modif pour sauce
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

//v- Utilisation de express
// const app = express();
const pik = express();

//v- connection a mongoDB Atlas (sur leur site)

//j- teste avec variable et choix database
//v- ca marche avec new Database 'sauce'.
//v- mise en place variable environnement.
mongoose.connect(url_mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//v- interception des information sous format json
// app.use(express.json());
pik.use(express.json());

//o- en-Tete valide pour requete attendu
// app.use((req, res, next) => {
pik.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//v- appel des routes produits & users
//j- modif pour sauce piquante
// app.use('/api/sauce', sauceRoutes);
pik.use('/api/sauces', sauceRoutes);

//o- pour enregistre un login & password utilisateur crypté.
// app.use('/api/auth', userRoutes);
pik.use('/api/auth', userRoutes);

//o- pour stocker les images user
// app.use('/images', express.static(path.join(__dirname, 'images')));
pik.use('/images', express.static(path.join(__dirname, 'images')));

//o- Permet a cette objet d'être disponible pour les autres fichier js.
// module.exports = app;
module.exports = pik;
