import React from "react";
import "../Profilemen/stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import "./Coinstyle.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHardHat} from '@fortawesome/free-solid-svg-icons';
import LockIcon from "@material-ui/icons/Lock";

export default function CoinsForm() {
  return (
    <>
      <div className="container_game">
        <div className="container_coin">
          <div className="container_coin_2">
            <h1 className="price_coin">$500</h1>
            <div className="icon_coin">
              <FontAwesomeIcon icon={faHardHat} className="casco_cambio_1" />
              <div className="container_icon_coin">
                <LockIcon className="candado_coin" />
                <FontAwesomeIcon icon={faHardHat} className="casco_cambio_2" />
              </div>
              <div className="container_icon_coin">
                <LockIcon className="candado_coin" />

                <FontAwesomeIcon icon={faHardHat} className="casco_cambio_3" />
              </div>
              <div className="container_icon_coin">
                <LockIcon className="candado_coin" />

                <FontAwesomeIcon icon={faHardHat} className="casco_cambio_4" />
              </div>
            </div>
            <div className="container_title_coin">
              <h1 className="price_coin_2">VALOR:$100</h1>
              <h1 className="price_coin_2">VALOR:$500</h1>
              <h1 className="price_coin_2">VALOR:$1000</h1>
              <h1 className="price_coin_2">VALOR:$5000</h1>
            </div>
            <div className="container_boton_coin">
              <button className="boton_coin">COMPRAR</button>
              <button className="boton_coin">COMPRAR</button>
              <button className="boton_coin">COMPRAR</button>
              <button className="boton_coin">COMPRAR</button>
            </div>
          </div>
          <div className="title_container_coin">
            <h1 className="title_container_coin_1">M</h1>
            <h1 className="title_container_coin_1">O</h1>
            <h1 className="title_container_coin_1">N</h1>
            <h1 className="title_container_coin_1">E</h1>
            <h1 className="title_container_coin_1">D</h1>
            <h1 className="title_container_coin_1">A</h1>
            <h1 className="title_container_coin_1">S</h1>

          </div>
        </div>
        <OptionsGame />
      </div>
    </>
  );
}
