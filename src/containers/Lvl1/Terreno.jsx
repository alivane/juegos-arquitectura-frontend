import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { CuadroTerreno, Span } from './styles/style'

const Terreno = (props) => {
    const { shapes } = props;
    return (
        <div className="game_container">
            <div className="flecha_1">
                <ArrowRightAltIcon className="vertical_arrow_up" />
            </div>
            <CuadroTerreno>
                <Span>
                    <h1>JUEGO</h1>
                    {shapes}
                </Span>
            </CuadroTerreno>
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
    )
}

export default Terreno;
// style={{height: '500px', width: '500px', position: 'relative', padding: '0'}}