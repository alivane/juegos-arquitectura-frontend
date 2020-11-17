import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { CuadroTerreno3, Span } from './styles/stylel3';

const Terreno3 = (props) => {
    const { shapes } = props;
    return (
        <div className="game_container">
            <div className="flecha_1">
                <ArrowRightAltIcon className="vertical_arrow_up" />
            </div>
            <CuadroTerreno3>
                <Span>
                    <h1>JUEGO</h1>
                    {shapes}
                </Span>
            </CuadroTerreno3>
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
            <div className="level_container">NIVEL 3: DIF&Iacute;CIL</div>
        </div>
    )
}

export default Terreno3;
// style={{height: '500px', width: '500px', position: 'relative', padding: '0'}}