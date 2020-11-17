import styled from 'styled-components'

export const CuadroTerreno3 = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 2 / span 3;
  grid-row: 1 / span 3;
  background: rgba(255,255,255, 0.55);
  clip-path: polygon(0 0, 100% 39%, 100% 100%, 0 100%);  

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
    top: 7px;
    right: 5px;
    left: 5px;
    bottom: 5px;
    color: white;
    font-size: 30px;
    text-align: center;
    z-index: 100;
    clip-path: polygon(0 0, 100% 39%, 100% 100%, 0 100%);  

`
