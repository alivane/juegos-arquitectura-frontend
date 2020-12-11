import React, { useEffect, useState } from "react";
import { token } from "../api";

const OptionsGame = () => {
  const [gender, setGender] = useState(0);

  useEffect(() => {
    const token_item = `Bearer ${localStorage.getItem("token")}`;

    token(token_item)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        localStorage.setItem("user", data);
        const data_user = JSON.parse(data);
        localStorage.setItem("gender", data_user["gender"]);
        setGender(data_user["gender"]);
      });
  }, []);

  return (
    <>
      <div className="container_2">
        <div className="container_a_box">
          <a
            href={gender === 0 ? "profilemen" : "profilewoman"}
            className="box_a_container"
          >
            <span className="box_a_container-2">Perfil</span>
          </a>
          <a href="coins" className="box_a_container">
            <span className="box_a_container-2"> Monedas</span>
          </a>

          <a href="optionlevel" className="box_a_container">
            <span className="box_a_container-2"> Volver al Menu</span>
          </a>

          <a href="logout" className="box_a_container">
            <span className="box_a_container-2"> Salir</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default OptionsGame;
