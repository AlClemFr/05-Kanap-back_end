"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//j- A revoir pour like /dislike vérification OK
//j-
//j-  a revoir pour les like et dislike
//j-
// const Thing = require('../models/Thing');
var Sauce = require('../models/Sauce');

var fs = require('fs'); //o- vérification OK // attention _ devant ID pas a l'origine
// j- apres modif pour multer.
//v- envoi info au front-end // ok


exports.createSauce = function (req, res, next) {
  var sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  delete sauceObject._userId;
  var sauce = new Sauce(_objectSpread({}, sauceObject, {
    _userId: req.auth.userId,
    imageUrl: "".concat(req.protocol, "://").concat(req.get('host'), "/images/").concat(req.file.filename),
    //o- recopie Nicolas ************************************************
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    userDisliked: []
  }));
  sauce.save().then(function () {
    res.status(201).json({
      message: 'Sauce enregistré !'
    });
  })["catch"](function (error) {
    res.status(400).json({
      error: error
    });
  });
}; //j- A revoir // vérification OK
// j- apres multer
//v- recupération id pour amettre à jour l'élément // ok


exports.modifySauce = function (req, res, next) {
  var sauceObject = req.file ? _objectSpread({}, JSON.parse(req.body.sauce), {
    imageUrl: "".concat(req.protocol, "://").concat(req.get('host'), "/images/").concat(req.file.filename)
  }) : _objectSpread({}, req.body);
  delete sauceObject._userId;
  Sauce.findOne({
    _id: req.params.id
  }).then(function (sauce) {
    if (sauce.userId != req.auth.userId) {
      res.status(401).json({
        message: 'Not authorized'
      });
    } else {
      Sauce.updateOne({
        _id: req.params.id
      }, _objectSpread({}, sauceObject, {
        _id: req.params.id
      })).then(function () {
        return res.status(200).json({
          message: 'Objet modifié!'
        });
      })["catch"](function (error) {
        return res.status(401).json({
          error: error
        });
      });
    }
  })["catch"](function (error) {
    res.status(400).json({
      error: error
    });
  });
}; //o- vérification OK
//j- apres fs
//v- recupération id pour supprimer l'élément // ok


exports.deleteSauce = function (req, res, next) {
  Sauce.findOne({
    _id: req.params.id
  }).then(function (sauce) {
    if (sauce.userId != req.auth.userId) {
      res.status(401).json({
        message: 'Not authorized'
      });
    } else {
      var filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink("images/".concat(filename), function () {
        Sauce.deleteOne({
          _id: req.params.id
        }).then(function () {
          res.status(200).json({
            message: 'Sauce supprimé !'
          });
        })["catch"](function (error) {
          return res.status(401).json({
            error: error
          });
        });
      });
    }
  })["catch"](function (error) {
    res.status(500).json({
      error: error
    });
  });
}; //o- vérification OK
//v- recupération id pour afficher l'élément


exports.getOneSauce = function (req, res, next) {
  Sauce.findOne({
    _id: req.params.id
  }).then(function (sauce) {
    return res.status(200).json(sauce);
  })["catch"](function (error) {
    return res.status(404).json({
      error: error
    });
  });
}; //o- vérification OK
//v- recupération de l'ensemble des éléments // ok


exports.getAllSauce = function (req, res, next) {
  Sauce.find().then(function (sauces) {
    return res.status(200).json(sauces);
  })["catch"](function (error) {
    return res.status(400).json({
      error: error
    });
  });
}; //o- voir a mettre en place like/dislike