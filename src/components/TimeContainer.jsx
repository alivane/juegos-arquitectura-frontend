import React, { useState } from 'react';
import ModalGame from './Modal';
import Timer from './timer';

const TimeContainer = () => {
    const [state, setState] = useState({
        abierto: false,
      })
    const abrirModal = () => {
        setState({ abierto: !state.abierto }); // setState : actualizar estado
      }
  return (
    <>
         <div className="time_container">
          <div className="container_reloj">
            <a className="bb1" onClick={() => abrirModal()} href>
              <span className="bb1_span">Finalizar</span>
            </a>
            <div className="reloj">
              <img src="agujaMinutos.png" alt="" id="minutos" />
              <img src="agujaSegundos.png" alt="" id="segundos" />
            </div>
            <Timer />
          </div>
          <ModalGame state={state} />
        </div>
    </>
  );
}

export default TimeContainer;


