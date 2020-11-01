import React from "react";
import './sexstyle.css';

export default function SexForm() {

  return (
    <>
     <div className="bg_sex_container">
        <div className="sex_container">
           <h1 className="h1_sex">SELECCIONAR</h1>
           <h1 className="h1_sex2">SEXO</h1> 
           <a href="profilemen" className="a_men">MASCULINO</a>
           <a href="profilewoman" className="a_woman">FEMENINO</a>
        </div>
     </div>
    </>
  );
}
