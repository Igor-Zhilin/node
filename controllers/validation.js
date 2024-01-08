function validateEmail(email) {
    const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/g;
    return validEmail.test(email);
  }
  
  module.exports = {
    validateEmail,
  };