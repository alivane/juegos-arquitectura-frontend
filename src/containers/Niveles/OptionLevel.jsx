import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import "./OptionLevel.css";
import LockIcon from "@material-ui/icons/Lock";
import { token, levels_all } from "../../api";

export default function OptionLevel() {
  // const history = useHistory();
  const [levels_unlock, setLevelsUnlock] = useState([]);
  const [levels, setLevels] = useState([]);
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
        setLevelsUnlock(data_user["levels"]);
        console.log(data);
      });

    levels_all(token_item)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        const levels_parse = JSON.parse(data);
        setLevels(levels_parse);
      });
  }, []);

  return (
    <>
      <div className="option_container_2">
        <div className="option_container__container">
          {levels.map((data, key) => {
            const unlock = levels_unlock.some(
              (level) => level["id_level"] === data["id"]
            );

            if (unlock === true) {
              return (
                <a
                  key={key}
                  href={data["path"]}
                  className="option_container__a"
                >
                  {data["name"]}
                </a>
              );
            } else {
              return (
                <div key={key} className="option_container__b">
                  <LockIcon className="locklevel" />
                  <a className="option_container__b_b">{data["name"]}</a>
                </div>
              );
            }
          })}
          <a
            href={gender === 0 ? "profilemen" : "profilewoman"}
            className="option_container__a"
          >
            PERFIL
          </a>
          <a href="logout" className="option_container__a">
            SALIR
          </a>
        </div>
      </div>
    </>
  );
}
