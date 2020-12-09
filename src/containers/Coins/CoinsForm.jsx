import React, { useState } from "react";
import "../Profilemen/stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import "./Coinstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import LockIcon from "@material-ui/icons/Lock";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CoinsForm = () => {
  const [price, setPrice] = useState(500);
  const [compra, setCompra] = useState(0);
  const [compra2, setCompra2] = useState(0);
  const [compra3, setCompra3] = useState(0);
  const [compra4, setCompra4] = useState(0);

  const updateCoins1 = (params) => {
    if (price >= 100 && compra === 0) {
      setPrice(price - 100);
      setUnlock(1);
      setCompra(1);
    } else {
      alert("No tienes Coins suficientes para comprar el casco gris");
    }
  };

  const updateCoins2 = (params) => {
    if (price >= 500) {
      setPrice(price - 500);
      setUnlock2(1);
      setCompra2(1);

    } else {
      alert("No tienes Coins suficientes para comprar el casco amarillo");
    }
  };
  const updateCoins3 = (params) => {
    if (price >= 1000) {
      setPrice(price - 1000);
      setUnlock3(1);
      setCompra3(1);

    } else {
      alert("No tienes Coins suficientes para comprar el casco azul");
    }
  };
  const updateCoins4 = (params) => {
    if (price >= 5000) {
      setPrice(price - 5000);
      setUnlock4(1);
      setCompra4(1);

    } else {
      alert("No tienes Coins suficientes para comprar el casco blanco");
    }
  };

  const [unlock, setUnlock] = useState(0);
  const [unlock2, setUnlock2] = useState(0);
  const [unlock3, setUnlock3] = useState(0);
  const [unlock4, setUnlock4] = useState(0);

  return (
    <>
      <div className="container_game">
        <div className="container_coin">
          <div className="container_coin_2">
            <h1 className="price_coin">${price}</h1>
            <div className="icon_coin">
              <div className="container_icon_coin">
                <img
                  src={unlock === 0 ? "lock1.png" : "gris 2.png"}
                  alt=""
                  className="casco"
                />
              </div>

              <div className="container_icon_coin">
                <img
                  src={unlock2 === 0 ? "lock2.png" : "amarillo 1.png"}
                  alt=""
                  className="casco"
                />
              </div>
              <div className="container_icon_coin">
                <img
                  src={unlock3 === 0 ? "lock3.png" : "azul 1.png"}
                  alt=""
                  className="casco"
                />
              </div>
              <div className="container_icon_coin">
                <img
                  src={unlock4 === 0 ? "lock4.png" : "blanco 1.png"}
                  alt=""
                  className="casco"
                />
              </div>
            </div>
            <div className="container_title_coin">
              <h1 className="price_coin_2">VALOR:$100</h1>
              <h1 className="price_coin_2">VALOR:$500</h1>
              <h1 className="price_coin_2">VALOR:$1000</h1>
              <h1 className="price_coin_2">VALOR:$5000</h1>
            </div>
            <div className="container_boton_coin">
              {compra === 0 ? (
                <button className="boton_coin" onClick={updateCoins1}>
                  COMPRAR
                </button>
              ) : (
                <h1 className="adquirir">Comprado</h1>
              )}
              {compra2 === 0 ? (
                <button className="boton_coin" onClick={updateCoins2}>
                  COMPRAR
                </button>
              ) : (
                <h1 className="adquirir">Comprado</h1>
              )}
              {compra3 === 0 ? (
                <button className="boton_coin" onClick={updateCoins3}>
                  COMPRAR
                </button>
              ) : (
                <h1 className="adquirir">Comprado</h1>
              )}
              {compra4 === 0 ? (
                <button className="boton_coin" onClick={updateCoins4}>
                  COMPRAR
                </button>
              ) : (
                <h1 className="adquirir">Comprado</h1>
              )}{" "}
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
};

export default CoinsForm;
