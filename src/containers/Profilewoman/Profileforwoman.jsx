import React from "react";
import './stylepro.css';
import OptionsGame from '../../components/OptionsGame'


const Woman = ()  =>{

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
      <OptionsGame/>
    
        </div>
      </>
    );
}

export default Woman;