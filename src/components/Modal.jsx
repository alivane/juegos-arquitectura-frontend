import React from 'react';
    import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../containers/Lvl1/styles/Gamestyle.css';
import Rating1 from './rating_game';


const ModalGame = (props) => {

    const {
        state,
        value,
        max,
        title,
        to,
        from,
        ranking
    } = props;

    return (
        <Modal className="body_modal" isOpen={state.abierto}>
            <ModalHeader className="header_level">
                {
                    value <= 1.5 ? (
                        <h1 className="header_title">VUELVE A INTENTAR</h1>
                    ) :
                    (
                        <h1 className="header_title">NIVEL COMPLETADO!</h1>
                    )
                }
            </ModalHeader>
            <ModalBody className="body_level">
                <div className="container_rating">
                    <span className="sp1">
                        <Rating1 
                            value={value}
                            max={max}
                            title={title}
                            ranking={ranking}
                        />
                    </span>
                </div>
            </ModalBody>
            <ModalFooter className="footer_game">
                {
                    value <= 1.5 ? (
                        <a href={from} className="next_level">
                            Volver a Intentar
                        </a>
                    ) :
                    (
                        <a href={to !== "no" ? to : "/optionlevel"} className="next_level">
                            {
                                to !== "no" ? "Siguiente nivel" : "Volver al menu"
                            }
                        </a>
                    )
                }
                <a href="home" className="buton_out">
                    Salir
                </a>
            </ModalFooter>
        </Modal>
    );
}

export default ModalGame;