const User = require("../models/user");
const { validateEmail, validatePassword } = require("../middleWare/validation");

// Отображение формы для регистрации пользователя
exports.form = (req, res) => {
  res.render("registerForm", { title: "Register" });
};

// Обработка отправки данных для регистрации пользователя
exports.submit = (req, res, next) => {
  // Поиск пользователя по email
  User.findByEmail(req.body.email, (error, user) => {
    if (error) return next(error);
    if (user) {
      console.log("Такой пользователь в базе уже существует");
      res.redirect("/"); // Перенаправление на главную страницу, если пользователь уже существует
    } else {
      // Создание нового пользователя
      User.create(req.body, (err) => {
        if (err) return next(err);
        req.session.userEmail = req.body.email; // Сохранение email пользователя в сессии
        req.session.userName = req.body.name; // Сохранение имени пользователя в сессии
        res.redirect("/"); // Перенаправление на главную страницу после успешной регистрации
      });
    }
  });
};
