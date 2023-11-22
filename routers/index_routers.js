const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
    addLine("Пинганули get запрос /");
  });
router.post('/', function(res,req){});

router.get('/register', function(res,req){});
router.post('/register', function(res,req){});

  module.exports = router;