import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/GameStyle3.css';
import Terreno3 from './Terreno3'
import Shapes from '../Figuras/Shapes';
import ZoneRandom from '../Lvl1/ZoneRandom';
import { ButtonOption } from '../Lvl1/styles/style';
import TimeContainer from '../../components/TimeContainer';
const GameForm3 = () => {

  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [resize, setResize] = useState(2);
  
  // const [presupuesto, setPresupuesto] = useState(300000);
  const [gasto, setGasto] = useState(0);
  const presupuesto = 300000;

  const [shapes, setShapes] = useState([]);

  const onClickShape = (e, data) => {
    const price = data[0]['price']* resize;
    setGasto(price+gasto)
    setShapes([...shapes, <Shapes data={data} resize={resize} />])
  }
  
  const onClickresize = (e, value, option) => {
    setResize(value)
    setOption1(false)
    setOption2(false)
    setOption3(false)
    setOption4(false)
    if (option === 1) setOption1(true);
    if (option === 2) setOption2(true);
    if (option === 3) setOption3(true);
    if (option === 4) setOption4(true);
  }

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  return (
    <>
      <div className="game">
     
        <TimeContainer
            presupuesto={presupuesto}
            gasto={gasto}
            to="no"
        />
        <Terreno3 shapes={shapes} />

        <div className="piece_container">
          <div className="container_11">
            <div className="container_1_sala">
              <ButtonOption color={option1} onClick={(e) => onClickresize(e, 2, 1)}>Habitaci&oacute;n</ButtonOption>
              <ButtonOption color={option2} onClick={(e) => onClickresize(e, 1.6, 2)}>Sala</ButtonOption>
              <ButtonOption color={option3} onClick={(e) => onClickresize(e, 1, 3)}>Cocina</ButtonOption>
              <ButtonOption color={option4} onClick={(e) => onClickresize(e, 1.3, 4)}>Patio</ButtonOption>
            </div>
            <div className="container_1_precio">
              <p className="terreno">TERRENO: 100m2</p>
              <p className="presupuesto">PRESUPUESTO: {currencyFormat(presupuesto)}</p>
              <p className="gastos"> GASTOS: -{currencyFormat(gasto)}</p>
              <p className="total"> TOTAL: {currencyFormat(presupuesto-gasto)}</p>
            </div>
          </div>
          {
              presupuesto-gasto === 0 ? <h1 style={{'color': 'white'}} >Sin presupuesto</h1>  
              : <ZoneRandom onClickShape={onClickShape}/>
          }
        </div>
      </div>
    </>
  );
}
// $300,000.00
export default GameForm3;