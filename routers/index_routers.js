const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const register = require("../controllers/register");
=======
const register = require('../controllers/register')
>>>>>>> ad2c53feb8e582607d5fe87acc227d40def038f4

// router.get("/register", function (req, res) {
//   res.render("register.ejs");
// });
// router.post("/register", function (req, res) {});

<<<<<<< HEAD
router.get("/register", register.form);
=======




router.get("/register", register.form) 
>>>>>>> ad2c53feb8e582607d5fe87acc227d40def038f4
router.post("/register", function (req, res) {});





router.get("/login", function (req, res) {
  res.render("login.ejs");
});
router.post("/login", function (req, res) {});

router.get("/test", function (req, res) {
  res.end("/test");
});
<<<<<<< HEAD
router.post("/test", function (req, res) {
  console.log("Прошли по пути post/test");
  res.end("post/test");
});
=======


>>>>>>> ad2c53feb8e582607d5fe87acc227d40def038f4
module.exports = router;
