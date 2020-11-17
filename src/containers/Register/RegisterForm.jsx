import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './style.css';
import Title from './title';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Stylesre from './styre';
import { register } from '../../api';
import { validatePassword, validateEmail, isEmpty } from '../../utils/validations';
import InputLineRegister from '../../components/InputLineRegister';
import SwitchSex from './Switchsex';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const RegisterForm = () => {
  const history = useHistory()
  const [state, setState] = useState({
    registerData: {
      name: '',
      email: '',
      password: '',
      gender: 0,
    }
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,

  });

  const [stateGender, setStateGender] = useState({
    gender: false
  });

  
  const doRegister = (event) => {
    const {
      name,
      email,
      password,
    } = state.registerData;
    const nameError = isEmpty(name);
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password, email);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
    });

    if (nameError || emailError || passwordError) {
      alert('Ingrese datos válidos');
      return;
    }

    

    let gender = 0;

    if (stateGender.gender) gender = 1;

  
    const data = {
      name, email, password, gender
    }

    event.preventDefault();

    register(data)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        if(gender===1){
          history.push('/profilewoman');
        }
        if(gender===0){
          history.push('/profilemen');
        }
      })
      .catch(err => {
        
        alert('Usuario no se registro correctamente');
      });

  }

  const onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, state.registerData)
    registerData[name] = value;

    setState({
      registerData: registerData
    });
  }


  const handleStateGenderChange = (event) => {
    setStateGender({ ...stateGender, [event.target.name]: event.target.checked });
  };

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
              onChange={onChange}
              error={errors.name}
              id="name"
              value={state.registerData.name}
            />
                {
    errors.email && <span className="text-danger text-small d-block mb-2">
    <ErrorOutlineIcon />
    Ingrese un nombre de usuario v&aacute;lido
    </span>
      }

          </div>
          <label className="form_register__label">Correo</label>
          <div className="form_register__container">
            <EmailIcon className="form_register__container-icon" />
            <InputLineRegister
              name="email"
              type="text"
              required={true}
              onChange={onChange}
              error={errors.email}
              id="email"
              value={state.registerData.email}              
            />
            {
    errors.email && <span className="text-danger text-small d-block mb-2">
    <ErrorOutlineIcon />
    Ingrese un email v&aacute;lido
    </span>
      }
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
              onChange={onChange}
              error={errors.password}
              id="password"
              value={state.registerData.password}
            />
            {
    errors.email && <span className="text-danger text-small d-block mb-2">
    <ErrorOutlineIcon />
    Ingrese una contraseña v&aacute;lida
    </span>
      }
          </div>
        </div>
        <div className="position_question_register">
          <SwitchSex handleChange={handleStateGenderChange} state={stateGender} id="gender" />
          <button
            className="form_register__a-register"
            onClick={doRegister}
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

export default RegisterForm;