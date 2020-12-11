import React, { Fragment, useState, useEffect } from "react";
import "../Profilemen/stylepromen.css";
import OptionsGame from "../../components/OptionsGame";
import "./Coinstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import LockIcon from "@material-ui/icons/Lock";
import { token, helmets_all,get_helmets_by_user } from "../../api";

const CoinsForm = () => {
  const [price, setPrice] = useState(500);
  const [compra, setCompra] = useState([]);
  const [compra2, setCompra2] = useState(0);
  const [compra3, setCompra3] = useState(0);
  const [compra4, setCompra4] = useState(0);
  const [helmetsData, setHelmetsData] = useState([]);
  const [casco, setCasco] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const token_item = `Bearer ${localStorage.getItem("token", token)}`;

  useEffect(() => {
    helmets_all(token_item)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        const helmets_data = JSON.parse(data);
        for (let i = 0; i < helmets_data.length; i++) {
          if (helmets_data[i]["id"] === user["id_helmet"])
            setCasco(helmets_data[i]);
        }
        setHelmetsData(helmets_data);
      });
  }, []);

  const updateCoins1 = (params) => {
    if (price >= 100 ) {
      setPrice(price - 100);
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
              {helmetsData.map((data, key) => {
            const comprar = compra.some(
              (casco) => casco["id_casco"] === data["id"]
            );

            if (comprar === false) {
              return (
                <div
                        key={key}
                        className="container_helmet"
                      >
                        <LockIcon className="candado_coin" />

                        <FontAwesomeIcon
                          icon={faHardHat}
                          color={data["path_image"]}
                          className="casco"
                        />
                      </div>

              );
            } else {
              return (
                <div
                 key={key}
                        className="container_helmet"
                      >

                        <FontAwesomeIcon
                          icon={faHardHat}
                          color={data["path_image"]}
                          className="casco"
                        />
                      </div>

              );
            }
          })}
              </div>

            </div>
            <div className="container_title_coin">
              <h1 className="price_coin_2">VALOR:$100</h1>
              <h1 className="price_coin_2">VALOR:$500</h1>
              <h1 className="price_coin_2">VALOR:$1000</h1>
              <h1 className="price_coin_2">VALOR:$5000</h1>
            </div>
            <div className="container_boton_coin">
            {helmetsData.map((data, key) => {
            const comprar = compra.some(
              (casco) => casco["id_casco"] === data["id"]
            );

            if (comprar === false) {
              return (
                <button className="boton_coin" onClick={updateCoins1}>
                  COMPRAR
                </button>

              );
            } else {
              return (
                <h1 className="adquirir">Comprado</h1>

              );
            }
          })}
              {" "}
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
