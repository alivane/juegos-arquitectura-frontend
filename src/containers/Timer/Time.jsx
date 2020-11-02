import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Timer from './timer';

const Time = () => {
    return(
        <div className="container_reloj"> 
            <div className="reloj">
                <img src="agujaMinutos.png" alt="" id="minutos"/>
                <img src="agujaSegundos.png" alt="" id="segundos"/>
            </div>
            <Timer/>
        </div>
            
    );
}

export default Time;