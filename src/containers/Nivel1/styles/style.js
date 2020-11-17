import styled from '../../Lvl1/styles/node_modules/styled-components'

export const CuadroTerreno = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 2 / span 3;
  grid-row: 1 / span 3;
  background: rgba(255,255,255, 0.55);
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00);
    background-size: 400%;
    transition: 0.5s;
    animation: animate 15s linear infinite;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00);
    background-size: 400%;
    transition: 0.5s;
    opacity: 1;
    filter: blur(20px);
    animation: animate 20s linear infinite;
`

export const Span = styled.span `
    position: absolute;
    background: #0c0c0c;
    top: 5px;
    right: 5px;
    left: 5px;
    bottom: 5px;
    color: white;
    font-size: 30px;
    text-align: center;
    z-index: 100;
`
export const Zone = styled.div `
  margin: 10px 0 10px 0;
  // background-color: red;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.58);
  // opacity: 0.5;
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

export const NivelContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // background-image: url("img/nivel1/house.jpg");
  background-size:100vw 100vh;
  minHeight:100vh;
  height: 100vh;
  width:auto;
  
`

export const ImageShape = styled.div `
  // margin: 0 10px 0 10px;
  cursor: pointer;
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
  background-image: url("img/shapes/${props => props.img}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-size: ${props => props.width || 100}px ${props => props.height || 100}px;
`