const User = require("../models/user");

// Миддлвэр для проверки существующего сеанса пользователя
module.exports = function (req, res, next) {
  // Если email пользователя не сохранен в сессии, перейти к следующему маршруту
  if (!req.session.userEmail) return next();
  // Найти пользователя по email
  User.findByEmail(req.session.userEmail, (error, userData) => {
    // Если произошла ошибка, передать управление обработчику ошибок
    if (error) return next(error);
    // Если пользователь найден, сохранить данные пользователя в объект запроса и объект ответа
    if (userData) req.user = res.locals.user = userData;
    // Перейти к следующему маршруту
    next();
  });
};
