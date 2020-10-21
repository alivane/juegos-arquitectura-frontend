import React  from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Input,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './prueba.css';
import Timer from './timer';

export default class  Prueba extends React.Component{

state = {
    abierto: false,
}
abrirModal = () =>{
    this.setState({abierto:!this.state.abierto}); // setState : actualizar estado
}

render(){

    return(
        
        <>
            <div className="principal">
                    <button className="bb1" onClick={this.abrirModal}>Mostrar Modal</button>
            </div> 
            <div className="container_reloj"> 
            <div className="reloj">
            <img src="agujaMinutos.png" alt="" id="minutos"/>
            <img src="agujaSegundos.png" alt="" id="segundos"/>
            </div>
            <Timer/>
            </div>
            
         
        

            <Modal isOpen={this.state.abierto} className="modal-1">
                <ModalHeader >
                    INICIAR SESION
                </ModalHeader>
                <ModalBody >
                <FormGroup>
                    <label for="usuario">Usuario</label>
                    <input type="text" id="usuario"/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <Input type="text" id="password"/>
                </FormGroup>
                </ModalBody>
                <ModalFooter>
                <Button class="btn btn-primary"  onClick={this.abrirModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    
    
    );
}
}