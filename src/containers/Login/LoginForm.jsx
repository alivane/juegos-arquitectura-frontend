import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import Styleslo from './stylo';
import { login } from '../api';

export default class LoginForm extends React.Component {
    state = {
        loginData: {
          email: '',
          password: ''
        },
    }


    
  doLogin = (event) => {
    
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
        this.props.history.push('/menusemanal'); 
       
      })
      .catch(err => {
        alert('Usuario no registrado o datos ingresados invalidos');
        this.props.history.push('/login');
      });
  }
    render(){

 
  return (
     <>

<Styleslo/>

 <div className="container_login">
<Title/>
    <div className="form_login">
        <label className="form_login__label">Nombre usuario o correo</label>
        <div className="form_login__container">
             <PersonOutlineIcon className="form_login__container-icon"/>
             <input type="text"  name="email" className="form_login__container-input"/>
        </div>
        <label className="form_login__label">Contraseña</label>
        <div className="form_login__container">
            <LockIcon className="form_login__container-icon"/>
            <input type="password" name="password"  className="form_login__container-input"/>
        </div>
         <a href="login" className="form_login__a-login" onClick={this.doLogin} >INICIAR SESIÓN</a>
    </div>
</div>
    </>
       );
    }
}


// CAMBIAR FONDO EN EL CUAL LAS FIGURAS SE VAYAN COLOCANDO AL AZAR FONDO GIF LE GUSTO AL CLIENTE 
// Clientes prefieren display horizontal 
