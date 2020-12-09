import React, { useEffect, useState } from "react";
import './stylepromen.css';
import OptionsGame from '../../components/OptionsGame'
import { token, avatars_all ,helmets_all, update_user} from '../../api';

const ProfileMen = (props) =>{

  const [name, setName] = useState("");
  const [pathAvatar, setPathAvatar] = useState("");
  const [pathCasco, setPathCasco] = useState("");

  const gender = localStorage.getItem('gender');
  const user = JSON.parse(localStorage.getItem('user'))
  const token_item = `Bearer ${localStorage.getItem('token', token)}`;



  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  }
  
  useEffect(() => {
    setName(user['name'])
    avatars_all(token_item, gender)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    })
    .then(data => {
      console.log(data)
      const avatars = JSON.parse(data);
      for (let i=0; i<avatars.length; i++) {
        if (avatars[i]['id'] === user['id_avatar']) setPathAvatar(avatars[i]['path_image'])
      }
    })
   
    
}, []);

const onClickAvatar = () => {


  const userUpdate = {
    "name": name,
    "mail": user['mail'],
    "gender": user['gender'],
    "coins": user['coins'],
    "id_avatar": user['id_avatar'],
    "id_helmet": user['id_helmet']
  }
  const data = {...user, ...userUpdate};
  localStorage.setItem('user', JSON.stringify(data));

  update_user(token_item, userUpdate, user['id'])
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        alert("Cambio correctamente")
      }
      return response.text();
    })
}

    return (
      <>
        <div className="container_game">
          <div className="container_1">
            <div className="uno">
            <img src={pathAvatar} alt="" className="img_uno" />

              <a href="avatarmen" className="uno_3">
                CAMBIAR AVATAR
              </a>
            </div>

            <div className="dos">
              <div className="dos_container">
              {}
              <input type="text" className="doss" value={name} onChange={(e) => onChangeName(e)} />
                <label htmlFor="" className="dosss">
                  Cambiar Nombre
                </label>
                

                <div className="doss1">
                  $100.000
                  <img src="moneda2.ico" alt="moneda" className="money_icon" />
                </div>
                <div className="dosss">Monedas</div>
                <div className="doss2">Aprendiz</div>
                <div className="dosss">Rango</div>
              </div>
            </div>
            <div className="boton_actualizar">
              <button className="actualizar" onClick={onClickAvatar}>Actualizar Perfil</button>  
              </div>            
          </div>

          <OptionsGame/>
        </div>
      </>
    );
}

export default ProfileMen;