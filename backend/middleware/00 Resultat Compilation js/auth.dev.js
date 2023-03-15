"use strict";

//o- vérification OK
//v-aucun prob dans consolae apres validation
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];
    var decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    var userId = decodedToken.userId; // console.log(token);

    req.auth = {
      userId: userId
    };
    next();
  } catch (error) {
    res.status(401).json({
      error: error
    });
  }
};