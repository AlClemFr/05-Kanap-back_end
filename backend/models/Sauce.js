//o- vérification OK

//v- Recupération package/librairie/dictionnaire.
const mongoose = require('mongoose');

if (true) {
  //j- pour piquante
  //o- *****
  //v- Créaction du modele/schéma.
  //v- required indique que ce champs doit être renseigné.

  const sauceSchema = mongoose.Schema({
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
    }],
  });

  //v- les autres fichiers js peuvent accéder à ce model. et aussi express.
  module.exports = mongoose.model('Sauce', sauceSchema);
};