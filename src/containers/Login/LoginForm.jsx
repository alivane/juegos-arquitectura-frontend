import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Title from "./title";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockIcon from "@material-ui/icons/Lock";
import { login } from "../../api";
import { validatePassword, validateEmail } from "../../utils/validations";
import InputLineLogin from "../../components/InputLineLogin";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const LoginForm = () => {
  const history = useHistory();
  const [state, setState] = useState({
    loginData: {
      email: "",
      password: "",
    },
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const doLogin = (event) => {
    const { email, password } = state.loginData;
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password, email);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    const data = {
      email,
      password,
    };
    event.preventDefault();
    login(data)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((token) => {
        localStorage.setItem("token", token);
        history.push("optionlevel");
      })
      .catch((err) => {
        alert("Usuario no registrado o datos ingresados invalidos");
        history.push("/login");
      });
  };

  const onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, state.loginData);
    loginData[name] = value;
    setState({
      loginData: loginData,
    });
  };

  return (
    <>
      <div className="bg">
        <div className="container_login">
          <div className="form_login">
            <Title />
            <label className="form_login__label">Correo</label>
            <div className="form_login__container">
              <PersonOutlineIcon className="form_login__container-icon" />
              <InputLineLogin
                name="email"
                label="Correo"
                type="text"
                required={true}
                onChange={onChange}
                error={errors.email}
                value={state.loginData.email}
                id="input_email"
              />
              <span id="icon_error_email" className="icon_error">
                <ErrorOutlineIcon />
              </span>
              <span id="icon_OK_email" className="icon_check">
                <CheckCircleOutlineIcon />
              </span>
              <p id="emailError"></p>
            </div>
            <label className="form_login__label">Contraseña</label>
            <div className="form_login__container">
              <LockIcon className="form_login__container-icon" />
              <InputLineLogin
                name="password"
                label="Contraseña"
                type="password"
                required={true}
                minLength={4}
                maxLength={8}
                onChange={onChange}
                error={errors.password}
                value={state.loginData.password}
                id="input_password"
              />
              <span id="icon_error_password" className="icon_error">
                <ErrorOutlineIcon />
              </span>
              <span id="icon_OK_password" className="icon_check">
                <CheckCircleOutlineIcon />
              </span>
              <p id="passwordError"></p>
            </div>
          </div>
          <div className="position_question_login">
            <button className="form_login__a-login" onClick={doLogin}>
              <span className="form_login__a-login2">
                INICIAR SESI&Oacute;N
              </span>
            </button>
            {/* <a href="recovery" className="a_question">
            ¿Olvidaste tu contraseña?
          </a> */}
            <div className="question_login">
              <p className="question_login_1">¿NO TIENES CUENTA?</p>
              <a href="register" className="a_question_login">
                REG&Iacute;STRATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
