class Validator {
    static isEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    static isStrongPassword(password) {
      return password.length >= 8; 
    }
  }
  
  module.exports = Validator;
  