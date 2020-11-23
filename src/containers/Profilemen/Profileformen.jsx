import React from "react";
import './stylepromen.css';
import OptionsGame from '../../components/OptionsGame'
import { update } from '../../api';
const ProfileMen = (props) =>{

    return (
      <>
        <div className="container_game">
          <div className="container_1">
            <div className="uno">
              <img src="myAvatarMen.png" alt="" className="img_uno" />
              <a href="avatarmen" className="uno_3">
                CAMBIAR FOTO
              </a>
            </div>

            <div className="dos">
              <div className="dos_container">
              {}
                <input type="text" className="doss"/>
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