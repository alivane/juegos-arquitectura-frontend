import React from "react";
import './stylepromen.css';
import {useStyles} from "./Styleformen";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function ProfileMen(){

    const classes = useStyles();


    return(
<>

<div className={classes.bgprofile}>
<div className="profile_container">
    <div className="profile_container__img_container">
        <div className="profile_container__img_container-img_men">
        <img src="myAvatarMen.png" alt="" className="avatar"/>
        </div>
        <a href="login" className="profile_container__img_container_a-img_men" > Cambiar Foto</a>
    </div>
    <div className="profile_container__menu_container">
        <input type="text" className="profile_container__menu-input_men"/>
        <label className="profile_container__menu-label_1">Cambiar Nombre</label>
        <div className="profile_container__opciones_men">$100.000</div>
        <label className="profile_container__menu-label" >Monedas</label>
        <div className="profile_container__opciones_men" > Aprendiz</div>
        <label className="profile_container__menu-label"  >Rango</label>
    </div>  
    <div className="profile_container__footer_container">
    <div className="profile_container__footer_container-flet_arrow">
    <FontAwesomeIcon icon={faAngleLeft} className="profile_container__footer_container-icon"/>
    </div>
        <div className="profile_container__footer_container-box_1"></div>
        <div className="profile_container__footer_container-box_2"></div>
        <div className="profile_container__footer_container-box_3"></div>
        <div className="profile_container__footer_container-right_arrow">
        <FontAwesomeIcon icon={faAngleRight} className="profile_container__footer_container-icon"/>

        </div>
    </div>    
    <a href="home" className="profile_container__footer_container-a_profile">MIS PROYECTOS</a>
</div>
<div className="options_container">
<a href="home" className="options_container__a-options">Avatar</a>
<a href="home" className="options_container__a-options">Logros</a>
<a href="home" className="options_container__a-options">Rango</a>
<a href="home" className="options_container__a-options">Monedas</a>
<div className="options_container__buttons_container">
<div className="options_container__buttons_container-option_a">
 <a href="home" className="option_a">Inicio</a>
 </div>
<div className="options_container__buttons_container-option_b">
 <a href="home" className="option_b">Salir</a>
 </div>
</div>
</div>
</div>



</>
    );
}