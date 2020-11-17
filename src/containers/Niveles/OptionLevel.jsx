import React from "react";
import './OptionLevel.css';
import LockIcon from "@material-ui/icons/Lock";


export default function OptionLevel() {
  return (
    <>
    <div className="option_container_2">
       <div className="option_container__container">
           <a href="game1" className="option_container__a">NIVEL 1</a>
           <div className="option_container__b">
           <LockIcon className="locklevel"/>
           <a href="game2" className="option_container__b_b">NIVEL 2</a>
           </div>
           <div className="option_container__c">
           <LockIcon className="locklevel"/>
           <a href="game3" className="option_container__c_c">NIVEL 3</a>
           </div>
           <a href="profilemen" className="option_container__a">PERFIL</a>
           <a href="logout" className="option_container__a">SALIR</a>
       </div>
    </div>
    </>
  );
}


