import React, { useEffect, useState } from "react";
import "./stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import { token, avatars_all, helmets_all, update_user } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";

const ProfileMen = (props) => {
  const [name, setName] = useState("");
  const [pathAvatar, setPathAvatar] = useState("");
  const gender = localStorage.getItem("gender");
  const user = JSON.parse(localStorage.getItem("user"));
  const token_item = `Bearer ${localStorage.getItem("token", token)}`;
  const [casco, setCasco] = useState([]);

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  useEffect(() => {
    setName(user["name"]);
    helmets_all(token_item)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        const helmets_data = JSON.parse(data);
        for (let i = 0; i < helmets_data.length; i++) {
          if (helmets_data[i]["id"] === user["id_helmet"])
            setCasco(helmets_data[i]);
        }
      });
    avatars_all(token_item, gender)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        // console.log(data);
        const avatars = JSON.parse(data);
        for (let i = 0; i < avatars.length; i++) {
          if (avatars[i]["id"] === user["id_avatar"])
            setPathAvatar(avatars[i]["path_image"]);
        }
      });
  }, []);

  const onClickProfile = () => {
    const userUpdate = {
      name: name,
      mail: user["mail"],
      gender: user["gender"],
      coins: user["coins"],
      id_avatar: user["id_avatar"],
      id_helmet: user["id_helmet"],
    };
    const data = { ...user, ...userUpdate };
    localStorage.setItem("user", JSON.stringify(data));

    update_user(token_item, userUpdate, user["id"]).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        alert("Cambio correctamente");
      }
      return response.text();
    });
  };

  return (
    <>
      <div className="container_game">
        <div className="container_1">
          <div className="uno">
            <div
              className="container_casco_a"
            >
              <FontAwesomeIcon
                icon={faHardHat}
                color={casco["path_image"]}
                className="cascos_cambio_a"
              />
            </div>
            
            <img src={pathAvatar} alt="" className="img_uno" />

            <a href="avatars" className="uno_3">
              CAMBIAR AVATAR
            </a>
          </div>

          <div className="dos">
            <div className="dos_container">
              {}
              <input
                type="text"
                className="doss"
                value={name}
                onChange={(e) => onChangeName(e)}
              />
              <label htmlFor="" className="dosss">
                Cambiar Nombre
              </label>

              <div className="doss1">
                ${user["coins"]}
                <img src="moneda2.ico" alt="moneda" className="money_icon" />
              </div>
              <div className="dosss">Monedas</div>
            </div>
          </div>
          <div className="boton_actualizar">
            <button className="actualizar" onClick={onClickProfile}>
              Actualizar Perfil
            </button>
          </div>
        </div>

        <OptionsGame />
      </div>
    </>
  );
};

export default ProfileMen;
