const express = require("express");
const router = express.Router();
const register = require("../controllers/register");

// router.get("/register", function (req, res) {
//   res.render("register.ejs");
// });
router.post("/", function  (req, res) {});

router.get("/entries", entries.list);
router.post("/entry", entry.);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/register", register.form);
router.post("/register", register.submit);

// router.get("/login", function (req, res) {
//   res.render("login.ejs");
// });
// router.post("/login", function (req, res) {});



router.get("/test", function (req, res) {
  res.end("/test");
});
router.post("/test", function (req, res) {
  console.log("Прошли по пути post/test");
  res.end("post/test");
});
module.exports = router;
