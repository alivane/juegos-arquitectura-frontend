import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../containers/Lvl1/styles/Gamestyle.css';
import Rating1 from './rating_game';


const ModalGame = (props) => {

    const { state } = props;

    return (
        <Modal className="body_modal" isOpen={state.abierto}>
            <ModalHeader className="header_level">
                <h1 className="header_title">NIVEL COMPLETADO!</h1>
            </ModalHeader>
            <ModalBody className="body_level">
                <div className="container_rating">
                    <span className="sp1">
                        <img src="tercero.png" alt="" className="tercero_img" />
                        <Rating1 />
                    </span>
                </div>
            </ModalBody>
            <ModalFooter className="footer_game">
                <a href="level2" className="next_level">
                    Siguiente nivel
                </a>
                <a href="home" className="buton_out">
                    Salir
                </a>
            </ModalFooter>
        </Modal>
    );
}

export default ModalGame;