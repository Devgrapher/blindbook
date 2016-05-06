var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require("./model.js")

router.route('/comments')

.get(function(req, res, next) {
  Comment.find(req.query, function(err, Comments) {
    if (err) return next(err);
    res.json(Comments); // return all Comments in JSON format
  });
})

.post(function(req, res, next) {
  console.log(req.body);
  Comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.route('/comments/:id')

.get(function(req, res, next) {
  Comment.findById(req.params.id, function (err, post) {
    console.log(post)
    if (err) return next(err);
    res.json(post);
  });
})

.put(function(req, res, next) {
  console.log(req.body);
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

.delete(function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
