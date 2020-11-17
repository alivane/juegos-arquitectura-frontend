import React from "react";
import '../Profilemen/stylepromen.css';
import OptionsGame from '../../components/OptionsGame'
import './Logrostyle.css';

export default function LogrosForm(){

    return (
      <>
        <div className="container_game">
        <div className="container_logros">
          <div className="iconl_container">
          <img src="medidor.png" alt="" className="iconl_container__logros"/>
          <img src="martillo.png" alt="" className="iconl_container__logros"/>
          <img src="regla.png" alt="" className="iconl_container__logros"/>
          <img src="mesa.png" alt="" className="iconl_container__logros"/>
          <img src="mouse.png" alt="" className="iconl_container__logros"/>
          <img src="laptop.png" alt="" className="iconl_container__logros"/>
          </div>
          <div className="detail_container">
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
            <div className="detail_container__logros">DETALLE DETALLE DETALLE </div>
          </div>
          <div className="title_container">
            <h1 className="title_container__logros">L</h1>
            <h1 className="title_container__logros">O</h1>
            <h1 className="title_container__logros">G</h1>
            <h1 className="title_container__logros">R</h1>
            <h1 className="title_container__logros">O</h1>
            <h1 className="title_container__logros">S</h1>
          </div>
        </div>
          <OptionsGame/>
        </div>
      </>
    );
}