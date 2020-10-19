import React from 'react';
import StylesNotpar from './StyleNot';
import './style.css';

/*
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faBell} />

*/

export default function NotFoundForm(){
    return(

        <>
        <StylesNotpar/>
        <div className="container_notfound">
        <img src="/arquitecto.png" alt="img-notfound" className="img_notfound"/>
        <div className="posihome">  
        <h className="e1">!LO SENTIMOS! </h>
        <h className="e2">NO ES EL MAPA QUE BUSCABAS</h>
        <a href="home" className="buthome">Volver al Home </a>
        </div>
        </div>
        

        </>

    );
}
