import React from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Titlerecovery from './title';


export default function RecoveryForm() {

  return (
     <>
  <div className="bg">
     <div className="container_recovery">

      <div className="form_recovery">
      <Titlerecovery/>

        <label htmlFor="" className="form_recovery__label">Ingrese correo</label>
        <div className="form_recovery__container">
          <FontAwesomeIcon icon={faEnvelope} className="form_recovery__container-icon"/>
             <input type="text"   className="form_recovery__container-input"/>
          
        
        </div>
        
      </div>
      <div className="container_a_recovery">
      <a href="login" className="form_recovery__a-recovery">Enviar</a>
      </div>

 
    </div>
</div>
      </>
  );
}
