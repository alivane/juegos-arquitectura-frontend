import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Stylesre from './styre';
import { register } from '../../api';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      name: '',
      email: '',
      password: ''

    },
  };
  doRegister = (event) => {

    event.preventDefault();
    register(this.state.registerData)
    this.props.history.push('/login')
      
  }
render(){
 


  return (
     <>
     <Stylesre/>

<div className="container_register">
<Title/>
<div className="form_register">
<label className="form_register__label">Nombre usuario </label>
<div className="form_register__container">
<PersonOutlineIcon className="form_register__container-icon"/>
<input type="text" name="name"  className="form_register__container-input"/>
</div>
<label className="form_register__label">Correo</label>
<div className="form_register__container">
<EmailIcon className="form_register__container-icon"/>
<input type="email" name="email" className="form_register__container-input" required={true}/>
</div>  
<label className="form_register__label">Contraseña</label>
<div className="form_register__container">
<LockIcon className="form_register__container-icon"/>
<input type="password" name="password"  className="form_register__container-input"/>
</div>
  <a href="login" className="form_register__a-register" onClick={this.doRegister} >Registrar</a>
</div>
 </div>
      </>
  );
}

}
