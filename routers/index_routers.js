<<<<<<< HEAD
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  addLine("Пинганули get запрос /");
});
router.post("/", function (req, res) {});

router.get("/register", function (req, res) {});
router.post("/register", function (req, res) {});

// app.get("/test", (req, res) => {
//   console.log("Прошли по пути тест");
//   res.end("Hello");
// });

// app.post("/test", (req, res) => {
//   console.log("Прошли по пути post test");
//   console.log(req.body);
//   res.end("Прошли по пути post test");
//   addLine("Пинганули post запрос ");
// });
module.exports = router;
=======
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
>>>>>>> 6c2144f735ff012ae4fbe7b797c73744a935282b
