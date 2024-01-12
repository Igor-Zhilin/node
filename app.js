// Подключение необходимых модулей
const express = require("express"); // Express фреймворк
const favicon = require("express-favicon"); // Модуль для установки favicon
const fs = require("fs"); // Модуль для работы с файловой системой
const path = require("path"); // Модуль для работы с путями к файлам и директориям
const { nextTick } = require("process"); // Модуль для работы с процессами
const ejs = require("ejs"); // Шаблонизатор EJS
const session = require("express-session"); // Модуль для работы с сессиями
const methodOverride = require("method-override"); // Модуль для поддержки HTTP-метода PUT и DELETE

// Пользовательские промежуточные обработчики
const userSession = require("./middleware/user_session"); // Пользовательская сессия

// Создание экземпляра приложения Express
const app = express();

// Импорт маршрутов из файла index_routers
const myRoutes = require("./routers/index_routers");

// Установка номера порта
const port = "3000";

// Путь к файлу
const filePath = path.join(__dirname, "tmp", "1.txt");

// Подключение к серверу MySQL
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "server",
  password: "2208",
});

connection.connect((err) => {
  if (err) {
    return console.log(`Ошибка: ${err.message}`);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

// Установка шаблонизатора и директории для представлений
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Вывод информации о среде выполнения
console.log(app.get("env"));

// Настройка промежуточных обработчиков
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "views")));
app.use(methodOverride("_method"));

// Настройка сессий
app.use(
  session({
    secret: "aboba",
    resave: false,
    saveUninitialized: true,
  })
);

// Обслуживание CSS-файла Bootstrap
app.use(
  "/css/bootstrap.css",
  express.static(
    path.join(
      __dirname,
      "public/css/bootstrap-5.3.2/dist/css/bootstrap.min.css"
    )
  )
);

// Обслуживание favicon
app.use(favicon(__dirname + "/public/favicon.ico"));

// Использование пользовательских промежуточных обработчиков и маршрутов
app.use(userSession);
app.use(myRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// Проверка окружения для продакшена
console.log(app.get("env"));

// Обработка ошибок для окружения продакшена
if (app.get("env") == "production") {
  app.use((req, res, err) => {
    res.status(err.status);
    res.sendFile(err.message);
  });
}

// ОБРАБОТЧИК ОШИБОК - Обработка ошибок 404
app.use((req, res, next) => {
  const err = new Error("Не удалось получить путь");
  err.status = 404;
  next(err);
});

// Обработка ошибок в зависимости от окружения
if (app.get("env") != "development") {
  app.use(function (err, req, res, next) {
    console.log(err.status, err.message);
    res.status = 404;
    link = "https://kappa.lol/u_3C1";
    res.render("error.ejs", { err, link });
  });
} else {
  app.use(function (err, req, res, next) {
    console.log(app.get("env"), err.status, err.message);
  });
}
