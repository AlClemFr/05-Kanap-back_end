//o- vérification OK
var express = require('express');

var router = express.Router();

var userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
module.exports = router;