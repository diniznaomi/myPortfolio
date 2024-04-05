export const validateEmail = (email) => {
    // Expressão regular para validar endereço de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Testa o endereço de e-mail com a expressão regular
    return emailRegex.test(email);
}
