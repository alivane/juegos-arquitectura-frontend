import React from "react";
import { CuadroTerreno, Span } from "./styles/style";

const Terreno = (props) => {
  // const classes = useStyles();
  const { shapes } = props;
  return (
    <CuadroTerreno>
      <Span>{shapes}</Span>
    </CuadroTerreno>
  );
};

export default Terreno;
// style={{height: '500px', width: '500px', position: 'relative', padding: '0'}}
