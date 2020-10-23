import React from 'react';
import {
        ShapeContainer,
        Shape
} from './style';
import Draggable from 'react-draggable';
import { useState } from 'react';

const Shapes = (props) => {
    const nodeRef = React.useRef(null);
    const { data } = props;
    const [degrade, setDegrade] = useState(0);

    const onClick = (e) => {
        if (degrade === 360) {
            setDegrade(0);
        } else {
            setDegrade(degrade + 90);
        }
    }

    return (
        <Draggable
            nodeRef={nodeRef}
            // position={10, 10}
            bounds="parent" 
            axis="both"
            handle=".handle"
            defaultPosition={{x: 200, y: 200}}
            // position={null}
            grid={[25, 25]}
            // scale={1}
            // onStart={this.handleStart}
            // onDrag={this.handleDrag}
            // onStop={this.handleStop}
        >
            <ShapeContainer 
                height={data[0].height}
                width={data[0].width}
                ref={nodeRef}
                className="handle"
            >
                <Shape
                    img={`${data[1]}/${data[0]['img']}`}
                    height={data[0].height}
                    width={data[0].width}
                    onClick={() => onClick()}
                    degrade={degrade}
                >
                  {/* <p>Sala</p>
                  <p>$10.000</p> */}
                  {/* <img src={rectangulo}></img> */}
                </Shape>
            </ShapeContainer>
        </Draggable>        
    );
}

export default Shapes;