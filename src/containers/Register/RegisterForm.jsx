import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Stylesre from './styre';
import {register} from '../../api';
import { validatePassword, validateEmail, isEmpty } from '../../utils/validations';
import InputLineRegister from '../../components/InputLineLogin';
import SwitchSex from './Switchsex';
export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      name: '',
      email: '',
      password: '',
      gender:0,
    },
    errors: {
      name: false,
      email: false,
      password: false,

    }
  };



  doRegister = (event) => {

    const {
      name,
      email,
      password
    } = this.state.registerData;
    const nameError = isEmpty(name);
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password, email);

    this.setState({
      errors: {
        name: nameError,      
        email: emailError,
        password: passwordError,
      }

    });
    event.preventDefault();
    register(this.state.registerData)

      
  }
  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData)
    registerData[name] = value
    this.setState({
      registerData
    });

  }
render(){
 
  const {
    email,
    password, name} = this.state.registerData;
  const { errors } = this.state;

  return (
    <>
      <Stylesre />

      <div className="container_register">
        <div className="form_register">
          <Title />
          <label className="form_register__label">Nombre usuario </label>
          <div className="form_register__container">
            <PersonOutlineIcon className="form_register__container-icon" />
            <InputLineRegister
              name="name"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.name}
              value={name}
            />
          </div>
          <label className="form_register__label">Correo</label>
          <div className="form_register__container">
            <EmailIcon className="form_register__container-icon" />
            <InputLineRegister
              name="email"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.email}
              value={email}
            />
          </div>
          <label className="form_register__label">Contraseña</label>
          <div className="form_register__container">
            <LockIcon className="form_register__container-icon" />
            <InputLineRegister
              name="password"
              type="password"
              required={true}
              minLength={4}
              maxLength={8}
              onChange={this.onChange}
              error={errors.password}
              value={password}
            />
          </div>
        </div>
        <div className="position_question_register">
          <SwitchSex />
          <button
            className="form_register__a-register"
            onClick={this.doRegister}
          >
            Registrar
          </button>
          <div className="question_register_container">
            <p className="question_register_1">¿Ya estas registrado?</p>
            <a href="login" className="question_register_2">
              Ingresar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

}
