import styled from 'styled-components'


export const ShapeContainer = styled.div `
    cursor: pointer;
    width: ${props => props.width*props.resize || 100}px;
    height: ${props => props.height*props.resize || 100}px;
    font-family: 'Press Start 2P';
    position: absolute;
`


export const Shape = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-image: url("img/shapes/${props => props.img}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transform: rotate(${props => props.degrade}deg);
    background-size: ${props => props.width*props.resize || 100}px ${props => props.height*props.resize || 100}px;
    width: ${props => props.width*props.resize || 100}px;
    height: ${props => props.height*props.resize || 100}px;
`