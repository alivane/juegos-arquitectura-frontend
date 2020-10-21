import React from 'react';
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import {useStyles} from './style';


export default function RegisterForm() {
const classes = useStyles();


  return (
     <>
     <div className={classes.bgr}>
<div className="container_register">
<Title/>
<div className="form_register">
<label className="form_register__label">Nombre usuario </label>
<div className="form_register__container">
<PersonOutlineIcon className="form_register__container-icon"/>
<input type="text"   className="form_register__container-input"/>
</div>
<label className="form_register__label">Correo</label>
<div className="form_register__container">
<EmailIcon className="form_register__container-icon"/>
<input type="email"   className="form_register__container-input" required={true}/>
</div>  
<label className="form_register__label">Contraseña</label>
<div className="form_register__container">
<LockIcon className="form_register__container-icon"/>
<input type="password"   className="form_register__container-input"/>
</div>
  <a href="login" className="form_register__a-register" >Registrar</a>
</div>
 </div>
 </div>
      </>
  );
}
