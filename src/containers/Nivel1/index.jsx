import React, {useState} from 'react';
import Terreno from './Terreno';
import ZoneRandom from './ZoneRandom';
import Shapes from '../Figuras/Shapes';
import { NivelContainer } from './styles/style';
import Time from '../Timer/Time';


export default function Nivel1() {
    const [shapes, setShapes] = useState([]);


    const onClickShape = (e, data) => {
        console.log(data);
        setShapes([...shapes, <Shapes data={data} />])
    }

    return (
        <NivelContainer>
            <Time />
            <Terreno shapes={shapes} />
            <ZoneRandom onClickShape={onClickShape} />
        </NivelContainer>
    );
}