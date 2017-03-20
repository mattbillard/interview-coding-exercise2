'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

//Credit: sample content below is from Wikipedia
let nextid = 21;
let articles = [
  `foo`,
  `bar`,
  `baz`,
];


router.get('/', function(req, res, next) {
  res.send(articles);
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  res.send(articles[id]);
});

// router.post('/', function (req, res, next) {
//   let article = req.body;
// });

// router.put('/:id', function (req, res, next) {
//   let id = parseInt(req.params.id);
//   let article = req.body;
// });

// router.delete('/:id', function (req, res, next) {
//   let id = parseInt(req.params.id);
// });


module.exports = router;
