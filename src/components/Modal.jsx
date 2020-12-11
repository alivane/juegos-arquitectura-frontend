import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../containers/Lvl1/styles/Gamestyle.css';
import Rating1 from './rating_game';
import { levels_by_user_register, update_user } from "../api";



const ModalGame = (props) => {

    const {
        state,
        value,
        max,
        title,
        to,
        from,
        toId,
        ranking
    } = props;

    useEffect(() => {
        const token_item = `Bearer ${localStorage.getItem("token")}`;
        const user = JSON.parse(localStorage.getItem("user"));
        if (toId && ranking) {
            const data_level = {
                'id_user': user['id'],
                'id_level': toId
            }

            levels_by_user_register(data_level).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            })
        }

        if (ranking) {
            const userUpdate = {
                name: user["name"],
                mail: user["mail"],
                gender: user["gender"],
                coins: user["coins"] + ranking*10,
                id_avatar: user["id_avatar"],
                id_helmet: user["id_helmet"],
            };

            const data = { ...user, ...userUpdate };
            localStorage.setItem("user", JSON.stringify(data));
            update_user(token_item, userUpdate, user["id"]).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.text();
            });
        }
    }, [ranking])

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
                <a href="optionlevel" className="buton_out">
                    Volver a Menu
                </a>
            </ModalFooter>
        </Modal>
    );
}

export default ModalGame;