var express = require('express');
var router = express.Router()

// frontend routes =========================================================
// route to handle all angular requests
router.get('/', function(req, res) {
  res.sendfile('./public/views/index.html'); // load our public/index.html file
});

module.exports = router;
