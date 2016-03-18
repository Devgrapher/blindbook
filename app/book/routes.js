var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require("./model.js")

router.route('/books')

.get(function(req, res, next) {
  // use mongoose to get all books in the database
  Book.find(function(err, books) {
    // if there is an error retrieving, send the error.
    // nothing after res.send(err) will execute
    if (err) return next(err);
    res.json(books); // return all books in JSON format
  });
})

.post(function(req, res, next) {
  console.log(req.body);
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.route('/books/:id')

.get(function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

.put(function(req, res, next) {
  console.log(req.body);
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

.delete(function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
