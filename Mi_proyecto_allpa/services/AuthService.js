const bcrypt = require('bcrypt');

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository; 
  }

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.contraseña);
    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta');
    }

    return { message: 'Inicio de sesión exitoso', userId: user.id };
  }
}

module.exports = AuthService;
