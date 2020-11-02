import React from "react";
import './stylepro.css';


export default function Woman(){

    return (
      <>
        <div className="container_game">
          <div className="container_1">
            <div className="uno">
              <img src="myAvatarWoman.png" alt="" className="img_uno_woman" />

              <a href="login" className="uno_3_woman">
                CAMBIAR FOTO
              </a>
            </div>

            <div className="dos">
              <div className="dos_container">
                <input type="text" className="doss_woman" />
                <label htmlFor="" className="dosss">
                  Cambiar Nombre
                </label>
                <div className="doss1_woman">
                  $100.000
                  <img src="moneda2.ico" alt="moneda" className="money_icon" />
                </div>
                <div className="dosss">Monedas</div>
                <div className="doss2_woman">Aprendiz</div>
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

          <div className="container_2">
            <div className="container_a_box">
              <a href="game1" className="box_a_container">
                NIVEL 1
              </a>
              <a href="avatar" className="box_a_container">
                INICIAR JUEGO
              </a>
              <a href="achievements" className="box_a_container">
                Logros
              </a>
              <a href="ranking" className="box_a_container">
                Rango
              </a>
              <a href="money" className="box_a_container">
                Monedas
              </a>
              <div className="boxx_container">
                <a href="start" className="box2_a_container">
                  Guardar
                </a>
                <a href="home" className="box3_a_container">
                  Salir
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}