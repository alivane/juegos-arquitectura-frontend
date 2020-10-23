import styled from 'styled-components'

export const CuadroTerreno = styled.div `
  background: green;
  width: 500px;
  height: 500px;
  // background-image: url("img/nivel1/terreno.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: rgba(204, 204, 204, 0.58);
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