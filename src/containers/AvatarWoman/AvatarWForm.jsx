import React from "react";
import "../Profilemen/stylepromen.css";
import "../AvatarMen/Avatarstyle.css";
import "./Avatarstylew.css";
import OptionsGame from "../../components/OptionsGame";
import LockIcon from "@material-ui/icons/Lock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";

export default function AvatarWForm() {
  return (
    <>
      <div className="container_game">
        <div className="container_option_avatar">
          <div className="container_casco">
            <div className="container_casco_a">
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_a" />
            </div>
            <div className="container_casco_a">
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_b" />
            </div>
            <div className="container_casco_b">
              <FontAwesomeIcon
                icon={faHardHat}
                className="casco_cambio_avatar"
              />
              <img src="myAvatar 3 2.png" alt="" className="avatar_principal" />
            </div>
            <div className="container_casco_a">
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_c" />
            </div>
            <div className="container_casco_a">
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_d" />
            </div>
          </div>
          <div className="container_boton">
            <button className="boton_avatar_w">CAMBIAR AVATAR</button>
          </div>
          <div className="container_avatar">
            <div className="container_avatar_a">
              <input type="checkbox" id="cambio" />
              <label htmlFor="" for="cambio" id="avatar_cambio_a">
                <img
                  src="myAvatar 3 1.png"
                  alt=""
                  className="avatar_cambio_a_a"
                />
              </label>
            </div>
            <div className="container_avatar_a">
              <input type="checkbox" id="cambio_2" />
              <label htmlFor="" for="cambio_2" id="avatar_cambio_b">
                <img
                  src="myAvatar 4 1.png"
                  alt=""
                  className="avatar_cambio_b_b"
                />
              </label>
            </div>
            <div className="container_avatar_a">
              <input type="checkbox" id="cambio_3" />
              <label htmlFor="" for="cambio_3" id="avatar_cambio_c">
                <img
                  src="myAvatar 2 1.png"
                  alt=""
                  className="avatar_cambio_c_c"
                />
              </label>
            </div>
            <div className="container_avatar_a">
              <input type="checkbox" id="cambio_4" />
              <label htmlFor="" for="cambio_4" id="avatar_cambio_d">
                <img
                  src="myAvatar 1 1.png"
                  alt=""
                  className="avatar_cambio_d_d"
                />
              </label>
            </div>
          </div>
        </div>

        <OptionsGame />
      </div>
    </>
  );
}
