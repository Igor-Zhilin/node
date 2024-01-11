const User = require("../models/user");

// Отображение формы для входа пользователя
exports.form = (req, res) => {
  res.render("loginForm", { title: "Login" });
};

// Обработка отправки данных для аутентификации пользователя
exports.submit = (req, res, next) => {
  User.authentificate(req.body.loginForm, (error, data) => {
    if (error) return next(error);
    if (!data) {
      console.log("Имя или пароль неверный");
      res.redirect("back"); // Перенаправление на предыдущую страницу в случае неверных данных
    } else {
      req.session.userEmail = data.email; // Сохранение email пользователя в сессии
      req.session.userName = data.name; // Сохранение имени пользователя в сессии
      res.redirect("/"); // Перенаправление на главную страницу после успешной аутентификации
    }
  });
};

// Выход пользователя из системы
exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/"); // Перенаправление на главную страницу после выхода из системы
  });
};
