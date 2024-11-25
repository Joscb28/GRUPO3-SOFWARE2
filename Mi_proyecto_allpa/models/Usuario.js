class Usuario {
  constructor(id, nombre, apellidoPaterno, contraseña, email, telContacto, fechaRegistro) {
    this.id = id;
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.contraseña = contraseña;
    this.email = email;
    this.telContacto = telContacto;
    this.fechaRegistro = fechaRegistro;
  }

  login() {
    // Lógica de validación de usuario, por ejemplo, comprobar si la contraseña es correcta
    if (this.contraseña === 'password') {
      return 'Login exitoso';
    } else {
      throw new Error('Contraseña incorrecta');
    }
  }
}

module.exports = Usuario;
