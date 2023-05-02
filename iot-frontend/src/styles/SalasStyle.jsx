import { motion } from 'framer-motion'
import styled from 'styled-components'

export const BuscarBox = styled.div`
position: relative;
  input{
    width: 196px;
    height: 44px;
    border: 1px solid #aaa;
    border-radius: 5px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    padding-left: 10px;
    @media screen and (max-width: 1400px) {
        height: 35px;
    }
    &:focus{
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
            }
    }
  i{
    position: absolute;
    right: 0;
    top: 15px;
    padding: 9px 18px;
    color: #000;
    transition: 0.3s;
    @media screen and (max-width: 1400px) {
        top: 10px;
    }
  }
  input:focus + i{
    color: dodgerBlue;
  }
  .btn{
    border: none;
    background: #57B8FF;
    color: #fff;
    padding-left: 0;
    cursor: pointer;
  }
`
export const BoxSelectSalas = styled.div`
    display: inline-block;
    position: relative;
    vertical-align: middle;
    &:before, &:after {
        content: "";
        position: absolute;
    }
  &:after {
    color: #4D4F5C;
    font-size: inherit;
    font-family: "Fontawesome";
    content: "\f107";
    padding: 8px;
    pointer-events: none;  
    top: 15%;
    right: 2%;
    vertical-align: middle;
  }
  @media screen and (max-width: 1400px) {
        display: none;
    }
`
export const SelectIndicadorSalas = styled.select`
    color: #4D4F5C;
    outline: 0;
    width: ${props => props.monitoreo};
    height: 44px;
    cursor: pointer;
    padding-left: 20px;
    background: #fff;
    border: 1px solid #A3A6B4;
    border-radius: 5px;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`

export const CardContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(293px, 1fr));
`

export const CardSala = styled(motion.div)`
    width: 293px;
    padding: 25px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.1);
    margin-bottom: 30px;
`
export const CardEstado = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    img{
        width: 61.5px;
        height: 61.5px;
    }
`
export const CardInfo1 = styled.div`

    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4{
        font-size: 26px;
        font-weight: 500;
        color: ${props=>props.color || '#000'}
    }
    p{
        font-size: 16px;
        font-weight: 500;
        color: gray;
    }
`
export const CardInfoSub = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    h4{
        font-size: 16px;
        font-weight: 600;
        color: #131523;
    }
    h3{
        font-size: 16px;
        font-weight: 600;
        color: #4D4F5C;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        color: #4D4F5C;
    }
`
export const BtnOn = styled.div`
    display: flex;
    gap: 20px;
    h4{
        font-size: 16px;
        font-weight: 500;
        color: #4D4F5C;
    }
`
export const CircleBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #21D59B;
    display: grid;
    place-content: center;
`
export const Circle = styled.div`
    width: 12px;
    height: 12px;
    background: #21D59B;
    border-radius: 50%;
`
export const Hr = styled.hr`
    color: #D7DBEC;
    margin: 10px 0; 
`
export const BoxLink = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`
export const BtnIndicador = styled.button`
    width: 243px;
    height: 35px;
    border-radius: 5px;
    background: #131523;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`