const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Middleware для валидации пароля
const validatePassword = (req, res, next) => {
  const password = req.body.password;
  if (password.length < 5) {
    res.status(400).json({ error: 'Пароль должен содержать не менее 5 символов' });
  } else {
    next();
  }
};

// Применение middleware к определенному маршруту
app.post('/register', validatePassword, (req, res) => {
  // Обработка регистрации пользователя
  res.json({ message: 'Пользователь зарегистрирован' });
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
