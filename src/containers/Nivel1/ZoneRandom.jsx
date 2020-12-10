import React, { useState, useEffect } from "react";
import { Zone, ImageShape } from "./styles/style";
import { random } from "../Figuras/helper";

const ZoneRandom = (props) => {
  const [shape1, setShape1] = useState(random());
  const [shape2, setShape2] = useState(random());
  const [shape3, setShape3] = useState(random());
  const [shape4, setShape4] = useState(random());

  const { onClickShape } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShape1(random());
      setShape2(random());
      setShape3(random());
      setShape4(random());
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <Zone>
      <ImageShape
        img={`${shape1[1]}/${shape1[0]["img"]}`}
        height={shape1[0].height}
        width={shape1[0].width}
        onClick={(event) => onClickShape(event, shape1)}
      />
      <ImageShape
        img={`${shape2[1]}/${shape2[0]["img"]}`}
        height={shape2[0].height}
        width={shape2[0].width}
        onClick={(event) => onClickShape(event, shape2)}
      />
      <ImageShape
        img={`${shape3[1]}/${shape3[0]["img"]}`}
        height={shape3[0].height}
        width={shape3[0].width}
        onClick={(event) => onClickShape(event, shape3)}
      />
      <ImageShape
        img={`${shape4[1]}/${shape4[0]["img"]}`}
        height={shape4[0].height}
        width={shape4[0].width}
        onClick={(event) => onClickShape(event, shape4)}
      />
    </Zone>
  );
};

export default ZoneRandom;
