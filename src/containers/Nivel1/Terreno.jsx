import React from 'react';
import { CuadroTerreno } from './style'

const Terreno = (props) => {
    // const classes = useStyles();
    const { shapes } = props;
    return (
        <CuadroTerreno style={{height: '500px', width: '500px', position: 'relative', padding: '0'}}>
            <CuadroTerreno>
                {shapes}
            </CuadroTerreno>
        </CuadroTerreno>
    )
}

export default Terreno;