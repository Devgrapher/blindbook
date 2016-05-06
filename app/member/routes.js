var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Member = require("./model.js")

router.route('/members')

.get(function(req, res, next) {
  Member.find(req.query, function(err, Members) {
    if (err) return next(err);
    res.json(Members); 
  });
})

.post(function(req, res, next) {
  console.log(req.body);
  Member.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.route('/members/:id')

.get(function(req, res, next) {
  Member.findById(req.params.id, function (err, post) {
    console.log(post)
    if (err) return next(err);
    res.json(post);
  });
})

.put(function(req, res, next) {
  console.log(req.body);
  Member.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

.delete(function(req, res, next) {
  Member.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.route('/members/phone/:phone')

.put(function(req, res, next) {
  console.log(req.body);
  var query = { phone: req.params.phone };
  var member = Member.findOneAndUpdate(query, req.body, { upsert:true, new:true }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

module.exports = router;
