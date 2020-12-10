export function isEmpty(value) {
  return value.trim() === "";
}
export function validateEmail(value) {
  let email_error = document.getElementById("emailError");
  let iconerror = document.getElementById("icon_error_email");
  let iconOK = document.getElementById("icon_OK_email");

  if (isEmpty(value)) {
    email_error.innerText = "Email es requerido";
    email_error.className = "emailError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";

    return false;
  } else if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value)
  ) {
    email_error.innerText = "Formato de email inválido";
    email_error.className = "emailError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";
    return false;
  }
  email_error.innerText = "";
  iconOK.className = "iconOK";
  iconerror.className = "icon_error";

  return true;
}
export function validateConfirmation(value, compareValue) {
  if (isEmpty(value)) {
    return false;
  }
  if (value !== compareValue) {
    return false;
  }
  return true;
}
export function validatePassword(value) {
  let password_error = document.getElementById("passwordError");
  let iconerror = document.getElementById("icon_error_password");
  let iconOK = document.getElementById("icon_OK_password");

  if (isEmpty(value)) {
    password_error.innerText = "Contraseña es requerida";
    password_error.className = "passwordError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";
    return false;
  }
  if (value.length <= 4) {
    password_error.innerText = "La contraseña debe tener más de 5 caracteres";
    password_error.className = "passwordError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";
    return false;
  }
  password_error.innerText = "";
  iconOK.className = "iconOK";
  iconerror.className = "icon_error";

  return true;
}
export function validateName(value) {
  let name_error = document.getElementById("nameError");
  let iconerror = document.getElementById("icon_error_name");
  let iconOK = document.getElementById("icon_OK_name");
  if (isEmpty(value)) {
    name_error.innerText = "Nombre de usuario es requerido";
    name_error.className = "nameError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";
    return false;
  }
  if (value.length <= 5) {
    name_error.innerText =
      "El nombre de usuario debe tener más de 5 caracteres";
    name_error.className = "nameError";
    iconerror.className = "iconerror";
    iconOK.className = "icon_check";
    return false;
  }
  name_error.innerText = "";
  iconOK.className = "iconOK";
  iconerror.className = "icon_error";
  return true;
}
