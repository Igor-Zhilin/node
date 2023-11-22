const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const fs = require("fs");
const app = express("");
const ejs = require("ejs");
app.use(express.json());
app.use(express.urlencoded({ extendend: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "css/bootstrap.css",
  express.static(
    path.join(
      __dirname,
      "public/css/bootstrap-5.3.2/dist/css/bootstrap.min.css"
    )
  )
);

const port = "3000";
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  addLine("Пинганули get запрос /");
});

app.get("/test", (req, res) => {
  console.log("Прошли по пути тест");
  res.end("Hello");
});

app.post("/test", (req, res) => {
  console.log("Прошли по пути post test");
  console.log(req.body);
  res.end("Прошли по пути post test");
  addLine("Пинганули post запрос ");
});
app.listen(port, function () {
  console.log("Сервер запущен порт " + port);
  addLine("server started ");
});

function addLine(line) {
  line = line + "timestamp:" + new Date().toLocaleString();
  fs.appendFile(
    path.join(__dirname + "/public/logger.txt"),
    line + "\n",
    (err) => {
      if (err);
    }
  );
}
app.use((req, res, next) => {
  const err = new Error("Could't get path");
  err.status = 404;
  ``;
  next(err);
});
app.get("env") == "production";

if (app.get("env") == "production") {
  app.use((err, req, res) => {
    res.status(err.status);
    res.sendFile(err.message);
  });
}
if (app.get(`env`) != "development") {
  app.use(function (err, req, res, next) {
    res.status = 404;
    res.render("error.ejs"), { err };
  });
} else {
  app.use(function (err, req, res, next) {
    console.log(app.get("env"), err.status, err.message);
  });
}
