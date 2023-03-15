"use strict";

//o- vérification OK
//o- importation package/bibliothéque
var express = require('express');

var router = express.Router();

var auth = require('../middleware/auth');

var multer = require('../middleware/multer-config'); // pour go.
// const stuffCtrl = require('../controllers/stuff');
// j- pour piquante


var sauceCtrl = require('../controllers/sauce'); // j- pour go


if (false) {
  //v- recupération de l'ensemble des éléments // ok
  router.get('/', stuffCtrl.getAllThing); //v- envoi info au front-end // ok
  // j- rajout multer aucun soucie dans terminal

  router.post('/', auth, multer, stuffCtrl.createThing); //v- recupération id pour afficher l'élément

  router.get('/:id', auth, stuffCtrl.getOneThing); //v- recupération id pour amettre à jour l'élément // ok
  // router.put('/:id', auth, stuffCtrl.modifyThing);
  // j- rajout multer aucun soucie dans terminal

  router.put('/:id', auth, multer, stuffCtrl.modifyThing); //v- recupération id pour supprimer l'élément // ok

  router["delete"]('/:id', auth, stuffCtrl.deleteThing); //o- Permet a cette objet d'être disponible pour les autres fichier js.

  module.exports = router;
}

; //j- pour piquante
//v- recupération de l'ensemble des éléments // ok

router.get('/', sauceCtrl.getAllSauce); //v- envoi info au front-end // ok

// j- rajout multer aucun soucie dans terminal
router.post('/', auth, multer, sauceCtrl.createSauce); //v- recupération id pour afficher l'élément

router.get('/:id', auth, sauceCtrl.getOneSauce); //v- recupération id pour mettre à jour l'élément // ok

// j- rajout multer aucun soucie dans terminal
router.put('/:id', auth, multer, sauceCtrl.modifySauce); //v- recupération id pour supprimer l'élément // ok

//o- recopie Nicolas ************************************************
router["delete"]('/:id', auth, sauceCtrl.deleteSauce);
// router.post("/:id/like", auth, sauceCtrl.likeSauce);

//o- Permet a cette objet d'être disponible pour les autres fichier js.
module.exports = router;