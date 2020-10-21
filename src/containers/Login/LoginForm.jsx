import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import Styleslo from './stylo';


export default function RegisterForm() {
  return (
     <>

<Styleslo/>

 <div className="container_login">
<Title/>
    <div className="form_login">
        <label className="form_login__label">Nombre usuario o correo</label>
        <div className="form_login__container">
             <PersonOutlineIcon className="form_login__container-icon"/>
             <input type="text"   className="form_login__container-input"/>
        </div>
        <label className="form_login__label">Contraseña</label>
        <div className="form_login__container">
            <LockIcon className="form_login__container-icon"/>
            <input type="password"   className="form_login__container-input"/>
        </div>
         <a href="login" className="form_login__a-login">INICIAR SESIÓN</a>
    </div>
</div>
    </>
       );
}


// CAMBIAR FONDO EN EL CUAL LAS FIGURAS SE VAYAN COLOCANDO AL AZAR FONDO GIF LE GUSTO AL CLIENTE 
// Clientes prefieren display horizontal 
