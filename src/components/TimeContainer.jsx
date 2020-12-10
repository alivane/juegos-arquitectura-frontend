import React, { useState } from 'react';
import ModalGame from './Modal';
import Timer from './timer';

const TimeContainer = (props) => {
  const {
    presupuesto, gasto, to, from
  } = props;
  const [state, setState] = useState({
    abierto: false,
  })

  const [starts, setStarts] = useState(0);
  const [title, setTitle] = useState("SIGUE MEJORANDO!")
  const [ranking, setRanking] = useState(0);
  const [time, setTime] = useState(0);


  const abrirModal = () => {
    setState({ abierto: !state.abierto });

    if(gasto === 0){
    const puntos = 0;
    setRanking(parseInt(puntos));
   
      setTitle("LO SENTIMOS, SUERTE PARA LA PROXIMA :(");
      setStarts(1)
    }
    else if(gasto !== 0 ){
      const total = parseInt((time / 6) + (presupuesto / (gasto !== 0 ? gasto : presupuesto)));
      const puntos = parseInt((total * 100) / 14);
      setRanking(parseInt(puntos));
      
    if (puntos < 24) {
      setTitle("LO SENTIMOS, SUERTE PARA LA PROXIMA :(");
      setStarts(1)
    }
    if (puntos >= 24 && puntos <= 50) { 
      setTitle("SIGUE MEJORANDO !"); 
      setStarts(2);
    }
    if (puntos > 50) { 
      setTitle("FELICITACIONES !!!"); 
      setStarts(3)
    }
    }
  }


  const timerGame = (time_seconds) => {
    setTime(60 - time_seconds);
    if (time_seconds === 2) abrirModal();
  }
  return (
    <>
      <div className="time_container">
        <div className="container_reloj">
          <a className="bb1" href="/optionlevel">
            <span className="bb1_span">Volver a men&uacute;</span>
          </a>
          <a className="bb1" onClick={() => abrirModal()} href>
            <span className="bb1_span">Finalizar</span>
          </a>
        
          <Timer 
            timerGame={timerGame}
          />
        </div>
        <ModalGame
          state={state}
          value={starts}
          max={3}
          title={title}
          ranking={ranking}
          to={to}
          from={from}
        />
      </div>
    </>
  );
}

export default TimeContainer;


