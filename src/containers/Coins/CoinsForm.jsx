import React, { Fragment, useState } from "react";
import "../Profilemen/stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import "./Coinstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import LockIcon from "@material-ui/icons/Lock";

const CoinsForm = () => {
  const [price, setPrice] = useState(500);
  const [compra, setCompra] = useState(0);
  const [compra2, setCompra2] = useState(0);
  const [compra3, setCompra3] = useState(0);
  const [compra4, setCompra4] = useState(0);

  const updateCoins1 = (params) => {
    if (price >= 100 && compra === 0) {
      setPrice(price - 100);
      setCompra(1);
    } else {
      alert("No tienes Coins suficientes para comprar el casco gris");
    }
  };

  const updateCoins2 = (params) => {
    if (price >= 500) {
      setPrice(price - 500);
      setCompra2(1);
    } else {
      alert("No tienes Coins suficientes para comprar el casco amarillo");
    }
  };
  const updateCoins3 = (params) => {
    if (price >= 1000) {
      setPrice(price - 1000);
      setCompra3(1);
    } else {
      alert("No tienes Coins suficientes para comprar el casco azul");
    }
  };
  const updateCoins4 = (params) => {
    if (price >= 5000) {
      setPrice(price - 5000);
      setCompra4(1);
    } else {
      alert("No tienes Coins suficientes para comprar el casco blanco");
    }
  };

  return (
    <>
      <div className="container_game">
        <div className="container_coin">
          <div className="container_coin_2">
            <h1 className="price_coin">${price}</h1>
            <div className="icon_coin">
              <div className="container_icon_coin">
                {compra === 0 ? (
                  <Fragment>
                    <LockIcon className="candado_coin" />
                    <FontAwesomeIcon
                      icon={faHardHat}
                      className="casco_cambio_1"
                    />
                  </Fragment>
                ) : (
                  <FontAwesomeIcon
                    icon={faHardHat}
                    className="casco_cambio_1"
                  />
                )}
              </div>

              <div className="container_icon_coin">
                {compra2 === 0 ? (
                  <Fragment>
                    <LockIcon className="candado_coin" />
                    <FontAwesomeIcon
                      icon={faHardHat}
                      className="casco_cambio_2"
                    />
                  </Fragment>
                ) : (
                  <FontAwesomeIcon
                    icon={faHardHat}
                    className="casco_cambio_2"
                  />
                )}
              </div>
              <div className="container_icon_coin">
                {compra3 === 0 ? (
                  <Fragment>
                    <LockIcon className="candado_coin" />
                    <FontAwesomeIcon
                      icon={faHardHat}
                      className="casco_cambio_3"
                    />
                  </Fragment>
                ) : (
                  <FontAwesomeIcon
                    icon={faHardHat}
                    className="casco_cambio_3"
                  />
                )}
              </div>
              <div className="container_icon_coin">
                {compra4 === 0 ? (
                  <Fragment>
                    <LockIcon className="candado_coin" />
                    <FontAwesomeIcon
                      icon={faHardHat}
                      className="casco_cambio_4"
                    />
                  </Fragment>
                ) : (
                  <FontAwesomeIcon
                    icon={faHardHat}
                    className="casco_cambio_4"
                  />
                )}
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
