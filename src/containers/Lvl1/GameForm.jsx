import React from 'react';
import './Gamestyle.css';
import Timer from '../Lvl1/timer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Gamestyle.css';
import Rating1 from './rating_game';
export default class  Game extends React.Component{

    state = {
        abierto: false,
    }
    abrirModal = () =>{
        this.setState({abierto:!this.state.abierto}); // setState : actualizar estado
    }
    
    render(){
        return (
          <>
            <div className="game">
              <div className="time_container">
                <div className="container_reloj">
                  <a className="bb1" onClick={this.abrirModal} href>
                    <span className="bb1_span">Finalizar</span>
                  </a>
                  <div className="reloj">
                    <img src="agujaMinutos.png" alt="" id="minutos" />
                    <img src="agujaSegundos.png" alt="" id="segundos" />
                  </div>
                  <Timer />
                </div>
                <Modal className="body_modal" isOpen={this.state.abierto}>
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
              </div>
              <div className="game_container">
                <div className="flecha_1">
                <ArrowRightAltIcon className="vertical_arrow_up" />
                </div>
                <div className="game_container_1">
                  <span className="span_game">JUEGO</span>
                </div>
                <div className="flecha_1_1">10 M</div>
                <div className="flecha_1_1_1">
                  <ArrowRightAltIcon className="vertical_arrow_down" />
                </div>

                <div className="flecha_2">
                  <ArrowRightAltIcon className="arrow_left" />
                </div>
                <div className="flecha_2_2">10 M</div>
                <div className="flecha_2_2_2">
                  <ArrowRightAltIcon className="arrow_right" />
                </div>
                <div className="level_container">NIVEL 1: F&Aacute;CIL</div>
              </div>
              <div className="piece_container">
                <div className="container_11">
                  <div className="container_1_sala">
                    <button className="ele">Habitaci&oacute;n</button>
                    <button className="ele">Sala</button>
                    <button className="ele">Cocina</button>
                    <button className="ele">Patio</button>
                  </div>
                  <div className="container_1_precio">
                    <p className="terreno">TERRENO: 100m2</p>
                    <p className="presupuesto">PRESUPUESTO: $300,000.00</p>
                    <p className="gastos"> GASTOS: -$60,000.00</p>
                    <p className="total"> TOTAL: $240,000.00</p>
                  </div>
                </div>
                <div className="container_22">
                  <div className="container_2_pieces"></div>
                </div>
              </div>
            </div>
          </>
        );
}
}