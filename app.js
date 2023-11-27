const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const app = express("");
const Sequelize = require("sequelize");
const sqlite = require("sqlite3");
const myRoutes = require("./routers/index_routers");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "test.sqlite",
  define: {
    timestamps: false,
  },
});
app.use(express.json());
app.use(express.urlencoded({ extendend: true }));

app.use(myRoutes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "css/bootstrap.css",
  express.static(
    path.join(
      __dirname,
      "../public/css/bootstrap-5.3.2/dist/css/bootstrap.min.css"
    )
  )
);

const port = "3000";

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

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// User.create({
//   name: "Tom",
//   age: 35
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));

// User.create({
//   name: "Bob",
//   age: 31
// }).then(res=>{
//   const user = {id: res.id, name: res.name, age: res.age}
//   console.log(user);
// }).catch(err=>console.log(err));

User.findAll({raw:true}).then(users=>{
  console.log(users);
}).catch(err=>console.log(err));

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

  

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
