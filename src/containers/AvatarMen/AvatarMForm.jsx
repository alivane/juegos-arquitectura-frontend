import React, { useState } from "react";
import "../Profilemen/stylepromen.css";
import "./Avatarstyle.css";
import OptionsGame from "../../components/OptionsGame";
import LockIcon from "@material-ui/icons/Lock";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHardHat} from '@fortawesome/free-solid-svg-icons';

const AvatarMform = (props) =>{

  const [personaje, setPersonaje]=useState(' myAvatar 8 2.png');
  const [casco, setCasco]=useState(' gris 2.png');

  return (
    <>
      <div className="container_game">
        <div className="container_option_avatar">
          <div className="container_casco">
            <div className="container_casco_a"
                  onClick= {
                 () => {
                  setCasco('gris 2.png');
                 }
               } 
            >
            <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_a"
    

            />
            </div>
            <div className="container_casco_a"
                onClick= {
                 () => {
                  setCasco('amarillo 1.png');
                 }
               } >
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_b"
              />
            </div>
            <div className="container_casco_b">
            <span id="avatar_cambio" className="cambios_avatars"><img src={personaje} alt="" className="avatar_principal"/>
                  <img src={casco} alt="" className="casco_cambio"/>                    
            </span>
            </div>
            <div className="container_casco_a"
              onClick= {
                 () => {
                  setCasco('azul 1.png');
                 }
               } >
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_c"
              
              />

            </div>
            <div className="container_casco_a"
              onClick= {
                 () => {
                  setCasco("blanco 1.png");
                 }
               } 
            >
              <LockIcon className="candado" />
              <FontAwesomeIcon icon={faHardHat} className="cascos_cambio_d"
               
              />

            </div>
          </div>
          <div className="container_boton">
              <button className="boton_avatar"  id="avatar_but">CAMBIAR AVATAR</button>
              <p id="pa_buton"></p>
          </div>
          <div className="container_avatar">
            <div className="container_avatar_a">
        
               <img src="myAvatar 8 2.png" onClick= {
                 () => {
                  setPersonaje('myAvatar 8 2.png');
                 }
               }  alt="" className="avatar_cambio_a_a"/>
        
            </div>
            <div className="container_avatar_a">
              <img src="myAvatar 7 2.png" onClick= {
                 () => {
                  setPersonaje('myAvatar 7 2.png');
                 }
               }  id="avatar_b" alt="" className="avatar_cambio_b_b" />

            </div>
            <div className="container_avatar_a">
            <input type="checkbox" id="cambio_3" />
            <label htmlFor="" for="cambio_3" id="avatar_cambio_c">
              <img src="myAvatar 6 1.png" onClick= {
                 () => {
                  setPersonaje('myAvatar 6 1.png');
                 }
               } id="avatar_c" alt="" className="avatar_cambio_c_c" />
              </label>
            </div>
            <div className="container_avatar_a">
            <input type="checkbox" id="cambio_4" />
            <label htmlFor="" for="cambio_4" id="avatar_cambio_d">
           <img src="myAvatar 5 1.png" onClick= {
                 () => {
                  setPersonaje('myAvatar 5 1.png');
                 }
               } id="avatar_d" alt="" className="avatar_cambio_d_d" />
              </label>
            </div>
          </div>
        </div>

        <OptionsGame />
      </div>
    </>
  );
}

export default AvatarMform;
