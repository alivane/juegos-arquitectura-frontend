import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import Styleslo from './stylo';
import {login} from '../../api';
import { validatePassword, validateEmail } from '../../utils/validations';
import InputLineLogin from '../../components/InputLineLogin';


export default class LoginForm extends React.Component {
    state = {
        loginData: {
          email: '',
          password: ''
        },
        errors: {
          email: false,
          password: false
        }
      };
    
    
    
      doLogin = (event) => {
        
        const {
          email,
          password } = this.state.loginData;
        const emailError = !validateEmail(email);
        const passwordError = !validatePassword(password, email);
    
    
        console.log('Email error: ' + emailError);
        console.log('Password error: ' + passwordError);
    
        this.setState({
          errors: {
            email: emailError,
            password: passwordError
          }
    
        });
        event.preventDefault();
    
        login(this.state.loginData)
          .then(response => {
            if(!response.ok){
              throw Error(response.statusText);
            }
            return response.text();
          })
          .then(token => {
            localStorage.setItem('token',token);
            this.props.history.push('/profilewoman'); 
           
          })
          .catch(err => {
            alert('Usuario no registrado o datos ingresados invalidos');
            this.props.history.push('/login');
          });
      }
    
      onChange = (name, event) => {
        const value = event.target.value;
        const loginData = Object.assign({}, this.state.loginData)
        loginData[name] = value
        this.setState({
          loginData
        });
      }
    
    render(){
        const {
            email,
            password } = this.state.loginData;
          const { errors } = this.state;
  return (
    <>
      <Styleslo />
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
              onChange={this.onChange}
              error={errors.email}
              value={email}
            />
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
              onChange={this.onChange}
              error={errors.password}
              value={password}
            />
          </div>
        </div>
        <div className="position_question_login">
          <button className="form_login__a-login" onClick={this.doLogin}>
            INICIAR SESIÓN
          </button>
          <a href="recovery" className="a_question">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="question_login">
            <p className="question_login_1">¿NO TIENES CUENTA?</p>
            <a href="register" className="a_question_login">
              REGISTRATE
            </a>
          </div>
        </div>
      </div>
    </>
  );
    }
}


// CAMBIAR FONDO EN EL CUAL LAS FIGURAS SE VAYAN COLOCANDO AL AZAR FONDO GIF LE GUSTO AL CLIENTE 
// Clientes prefieren display horizontal 
