//Formulario
function formValidation(e) {
  e.preventDefault(); // Evita recargar la página
  try {
    const userEmail = e.target.email.value;
    const passwordUser = e.target.password.value;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,?_\\-])[A-Za-z\d!@#$%^&*.,?_\\-]{8,15}$/;
    const userAge = parseInt(e.target.age.value);
    const regexEmailTest = regexEmail.test(userEmail);
    const regexPasswordTest = regexPassword.test(passwordUser);

    // Validaciones con if / throw
    if (userName === "") {
      throw new Error("El nombre no puede estar vacío.");
    }
        if (passwordUser === "") {
      throw new Error("La contraseña no puede estar vacío.");
    }
    if (!regexEmailTest) {
      throw new Error("El correo electrónico no es válido.");
    }
    if (isNaN(userAge) || userAge < 18 || userAge > 99) {
      throw new Error("La edad debe estar entre 18 y 99 años.");
    }
    if (!regexPasswordTest) {
      throw new Error(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo."
      );
    }
    // Datos ingresados correctamente
    console.log("✅ Formulario válido. Datos enviados correctamente.");
  } catch (error) {
    // Captura de errores 
    console.error("❌ Error de validación:", error.message);
  }
}
