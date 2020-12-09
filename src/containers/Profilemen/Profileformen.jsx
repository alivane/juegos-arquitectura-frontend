import React, { useEffect, useState } from "react";
import './stylepromen.css';
import OptionsGame from '../../components/OptionsGame'
import { token, avatars_all } from '../../api';

const ProfileMen = (props) =>{

  const [name, setName] = useState("");
  const [pathAvatar, setPathAvatar] = useState("");
  const gender = localStorage.getItem('gender');
  const user = JSON.parse(localStorage.getItem('user'))


  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  }
  
  useEffect(() => {
    const token_item = `Bearer ${localStorage.getItem('token', token)}`;
    setName(user['name'])
    avatars_all(token_item, gender)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    })
    .then(data => {
      const avatars = JSON.parse(data);
      for (let i=0; i<avatars.length; i++) {
        if (avatars[i]['id'] === user['id_avatar']) setPathAvatar(avatars[i]['path_image'])
      }
    })
  }, []);
  
    return (
      <>
        <div className="container_game">
          <div className="container_1">
            <div className="uno">
            <img src={pathAvatar} alt="" className="img_uno" />

              <a href="avatarmen" className="uno_3">
                CAMBIAR FOTO
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
            <div className="tres">
              <a href="previous" className="box2">
                &lt;
              </a>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <a href="next" className="box2">
                &gt;
              </a>
              <a href="projects" className="mis">
                {" "}
                MIS PROYECTOS
              </a>
            </div>
          </div>

          <OptionsGame/>
        </div>
      </>
    );
}

export default ProfileMen;