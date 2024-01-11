const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const login = require("../controllers/login");
const entries = require("../controllers/entries");

// Главная страница, отображение списка записей
router.get("/", entries.list);

// Форма для создания новой записи
router.get("/post", entries.form);
// Обработка отправки новой записи
router.post("/post", entries.submit);

// Форма для обновления записи
router.get("/update/:id", entries.updateForm);
// Обработка обновления записи
router.post("/update/:id", entries.updateSubmit);

// Удаление записи
router.delete("/:id", entries.delete);

// Форма регистрации нового пользователя
router.get("/register", register.form);
// Обработка отправки формы регистрации
router.post("/register", register.submit);

// Форма входа пользователя
router.get("/login", login.form);
// Обработка отправки формы входа
router.post("/login", login.submit);
// Выход пользователя
router.get("/logout", login.logout);

module.exports = router;
