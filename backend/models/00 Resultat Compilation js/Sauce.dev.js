"use strict";

//o- vérification OK
//v- Recupération package/librairie/dictionnaire.
var mongoose = require('mongoose');

if (false) {
  //j- pour go
  //v- Créaction du modele/schéma.
  // o- required indique que ce champs doit être renseigné.
  var thingSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }); //v- les autres fichiers js peuvent accéder à ce model. et aussi express.

  module.exports = mongoose.model('Thing', thingSchema);
}

if (true) {
  //j- pour piquante
  //o- remise en forme recopie Nicolas ************************************************
  //v- Créaction du modele/schéma.
  // o- required indique que ce champs doit être renseigné.
  var sauceSchema = mongoose.Schema({
    //j- avant title
    userId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    //j- rajout piquante
    manufacturer: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    //j- rajout piquante
    mainPepper: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    //j- avant price mettre true
    heat: {
      type: Number,
      required: true
    },
    //j- rajout piquante 
    likes: {
      type: Number
    },
    //j- rajout piquante 
    dislikes: {
      type: Number
    },
    //j- rajout piquante 
    usersLiked: [{
      type: String
    }],
    //j- rajout piquante 
    usersDisliked: [{
      type: String
    }]
  }); //v- les autres fichiers js peuvent accéder à ce model. et aussi express.

  module.exports = mongoose.model('Sauce', sauceSchema);
}

;