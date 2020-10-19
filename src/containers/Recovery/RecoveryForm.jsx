import React from 'react';
import Stylespar from './stylepa';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Titlerecovery from './title';


export default function RecoveryForm() {

  return (
     <>
     <Stylespar/>
     <div className="container_recovery">
      <Titlerecovery/>
      <div className="form_recovery">
        <label htmlFor="" className="form_recovery__label">Ingrese correo</label>
        <div className="form_recovery__container">
          <FontAwesomeIcon icon={faEnvelope} className="form_recovery__container-icon"/>
             <input type="text"   className="form_recovery__container-input"/>
        </div>
        <a href="login" className="form_recovery__a-recovery">Enviar</a>
        
      </div>
 
    </div>

      </>
  );
}
