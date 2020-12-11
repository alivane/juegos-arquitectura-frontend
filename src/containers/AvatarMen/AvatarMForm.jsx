import React, { useEffect, useState } from "react";
import "../Profilemen/stylepromen.css";
import "./Avatarstyle.css";
import OptionsGame from "../../components/OptionsGame";
import LockIcon from "@material-ui/icons/Lock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import { token, avatars_all, helmets_all, update_user } from "../../api";

const AvatarMform = (props) => {
  // const [personaje, setPersonaje] = useState([' myAvatar 8 2.png']);
  const [personaje, setPersonaje] = useState([]);
  const [casco, setCasco] = useState([]);
  const [avatarsData, setAvatarsData] = useState([]);
  const [helmetsData, setHelmetsData] = useState([]);
  const gender = localStorage.getItem("gender");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token_item = `Bearer ${localStorage.getItem("token", token)}`;

  useEffect(() => {
    avatars_all(token_item, gender)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        const avatars = JSON.parse(data);
        for (let i = 0; i < avatars.length; i++) {
          if (avatars[i]["id"] === user["id_avatar"]) setPersonaje(avatars[i]);
        }
        setAvatarsData(avatars);
      });

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
        setHelmetsData(helmets_data);
      });
  }, []);

  const onClickAvatar = () => {
    const userUpdate = {
      name: user["name"],
      mail: user["mail"],
      gender: user["gender"],
      coins: user["coins"],
      id_avatar: personaje["id"],
      id_helmet: casco["id"],
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
        <div className="container_option_avatar">
          <div className="container_casco">
            {helmetsData.map((data, key) => {
              const comprado = user["helmets"].some(
                (casco) => casco["id_helmet"] === data["id"]
              );
              if (comprado) {
                return (
                  <div
                    key={key}
                    className="container_casco_a"
                    onClick={() => setCasco(data)}
                  >
                    <FontAwesomeIcon
                      icon={faHardHat}
                      color={data["path_image"]}
                      className="cascos_cambio_a"
                    />
                  </div>
                );
              } else {
                return (
                  <div key={key} className="container_casco_a">
                    <LockIcon className="candado_avatar" />
                    <FontAwesomeIcon
                      icon={faHardHat}
                      color={data["path_image"]}
                      className="cascos_cambio_a"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="container_boton">
            <div className="container_casco_b">
              <span id="avatar_cambio" className="cambios_avatars">
                <img
                  src={personaje["path_image"]}
                  alt=""
                  className="avatar_principal"
                />
                <FontAwesomeIcon
                  icon={faHardHat}
                  color={casco["path_image"]}
                  className="cascos_cambio_a"
                />
              </span>
            </div>
          </div>

          <div className="container_boton">
            <button
              className="boton_avatar"
              onClick={() => onClickAvatar()}
              id="avatar_but"
            >
              <span className="boton_avatar-2">CAMBIAR AVATAR</span>
            </button>
          </div>

          <div className="container_avatar">
            {avatarsData.map((data, key) => {
              return (
                <div key={key} className="container_avatar_a">
                  <img
                    src={data["path_image"]}
                    onClick={() => setPersonaje(data)}
                    alt=""
                    className="avatar_cambio_a_a"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <OptionsGame />
      </div>
    </>
  );
};

export default AvatarMform;
