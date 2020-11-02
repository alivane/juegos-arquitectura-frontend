import React from 'react';
import Stylespar from './stylepa';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Titlerecovery from './title';
import {validateEmail } from '../../utils/validations';
import InputLineRecovery from '../../components/InputLineLogin';

export default class RecoveryForm extends React.Component {
  state = {
    recoveryData: {
      email: '',
    },
    errors: {
      email: false,
    }
  };
  doRecovery = (event) => {
        
    const {
      email} = this.state.recoveryData;
    const emailError = !validateEmail(email);


    console.log('Email error: ' + emailError);

    this.setState({
      errors: {
        email: emailError,
      }

    });
    event.preventDefault();

  }
  onChange = (name, event) => {
    const value = event.target.value;
    const recoveryData = Object.assign({}, this.state.recoveryData)
    recoveryData[name] = value
    this.setState({
      recoveryData
    });
  }
render(){
  const {
    email} = this.state.recoveryData;
  const { errors } = this.state;
  return (
    <>
      <Stylespar />
      <div className="container_recovery">
        <Titlerecovery />
        <div className="form_recovery">
          <label htmlFor="" className="form_recovery__label">
            Ingrese correo
          </label>
          <div className="form_recovery__container">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="form_recovery__container-icon"
            />
              <InputLineRecovery
              name="email"
              label="Correo"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.email}
              value={email}
            />
          </div>
          <button className="form_recovery__a-recovery" onClick={this.doRecovery}>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
  
}
