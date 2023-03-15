//o- vérification OK

//o- importation package/bibliothéque
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// j- pour piquante
const sauceCtrl = require('../controllers/sauce');


//j- pour piquante
//v- recupération de l'ensemble des éléments // ok
router.get('/', sauceCtrl.getAllSauce);

//v- envoi info au front-end // ok
// j- rajout multer aucun soucie dans terminal
router.post('/', auth, multer, sauceCtrl.createSauce);

//v- recupération id pour afficher l'élément
router.get('/:id', auth, sauceCtrl.getOneSauce);

//v- recupération id pour mettre à jour l'élément // ok
// j- rajout multer aucun soucie dans terminal
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

//v- recupération id pour supprimer l'élément // ok
router.delete('/:id', auth, sauceCtrl.deleteSauce);

//o- *****
router.post("/:id/like", auth, sauceCtrl.likeSauce);


//o- Permet a cette objet d'être disponible pour les autres fichier js.
module.exports = router;