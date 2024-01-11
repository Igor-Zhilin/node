// Функция для валидации email
function validateEmail(email) {
  // Регулярное выражение для проверки корректности email
  const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/g;
  // Проверка email с использованием регулярного выражения
  return validEmail.test(email);
}

// Экспорт функции валидации email
module.exports = {
  validateEmail,
};
