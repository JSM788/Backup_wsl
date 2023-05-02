import styled from 'styled-components'
import { CSVLink } from 'react-csv'

export const ContenedorMonitoreoAmbiente = styled.div`
  
`
export const BoxSelectAmbiente = styled.div`
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

`
export const SelectIndicadorAmbiente = styled.select`
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
    @media screen and (max-width: 1300px) {
        width: calc(${props => props.monitoreo} - 50px);
        padding-left: 8px;
    }
`
/*Main*/
export const ContenedorMonitoreo = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1600px) {
    flex-direction: column;
  }
`
export const ResumenAmbiente = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
`
export const BoxAmbiente = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BoxResumen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3{
      color: #131523;
      font-size: 32px;
      font-weight: 600;
  }
  p{
      margin-top: 8px;
      color: red;
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 16px;
  }
`
export const BoxEstado = styled.div`
    margin-top: -20px;
`
export const ProgressAmbiente = styled.div`
    margin-top: 20px;
    position: relative;
    width: ${props => props.display ? "400px" : "200px"};
    height: ${props => props.display ? "400px" : "150px"};
    display: flex;
    /* border: 1px solid red; */
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 1;
    
    &:after{
        content: '';
        box-sizing: border-box;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: ${props => props.display ? "400px" : "200px"};
        height: ${props => props.display ? "400px" : "200px"};
        border: 7px solid;
        border-color: ${props => props.color};
        border-radius: 50%;
        transform: rotate( calc( 1deg * ( -130 + ${props=> props.porcentage} * 1.8 ) ) );
        transition: 1s ease all;
   }
    @media screen and (max-width: 1350px){
        width: ${props => props.display ? "400px" : "200px"};
        height: ${props => props.display ? "400px" : "150px"};
        &:after{
            width:${props => props.display ? "400px" : "200px"};
            height: ${props => props.display ? "400px" : "200px"};
        }
    }
    
`
export const ProgressSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: ${props => props.display ? "0px" : "20px"};
    img{
        width: ${props => props.display ? "182px" : "80px"};
    }
`
export const ProgessEstadoAmbiente = styled.h2`
    text-align: center;
    color: ${props => props.colorsi1};
`
export const TablaAmbiente = styled.div`
    width: 600px;
    height: 500px;
    overflow-y: scroll;
    margin-top: 20px;
    @media screen and (max-width: 1600px){
        width: 100%;
    }
`
export const TablaIndicadoresImg = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 15px;
  width: 10px;
  gap: 16px;
  img{
    width: 25px;
  }
`
export const TablaEstadoColor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const EstadoTd = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
export const EnlaceTabla = styled.div`
  cursor: pointer;
  u{
    color: #3257DB;
    font-size: 16px;
  }
`
export const AmbienteEstadisticas = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 32px;
  width: 100%;
  display: grid;
  place-content: center;
`
export const UpdateBox = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`
export const BoxGrafica = styled.div`
  /* width: 800px;
  align-content: center; */
  width: 100%;
  /* @media screen and (max-width: 1919px){
    width: 700px;
  }
  @media screen and (max-width: 1750px){
    width: 600px;
  }
  @media screen and (max-width: 1650px){
    width: 550px;
  }
  @media screen and (max-width: 1600px){
    width: 900px;
  } */
`
/* Display */
export const DisplayContenedor = styled.div`
  position: fixed;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding-left: 260px;
  z-index: 10;
  background-color: #F5F6FA;
  @media screen and (min-width: 2500px){
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
export const ContenedorDisplay = styled.div`
 position: relative;
 display: flex;
 justify-content: space-between;
 gap: 80px;
 padding-right: 300px;
 @media screen and (max-width: 1600px){
    flex-direction: column;
 }
 @media screen and (min-width: 2500px){
    gap: 20px;
  }
`
export const CerrarDisplay = styled.div`
 position: absolute;
 right: 100px;
 top: 30px;
 font-size: 23px;
 font-weight: bold;
 cursor: pointer;
`
export const CalidadBox = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  h4{
    color: #3257DB;
    font-size: 26px;
    font-weight: 600;
  }
  h1{
    color: #131523;
    font-size: 50px;
    font-weight: bold;
  }
  h2{
    color: #0438AF;
    font-size: 22px;
    font-weight: 600;
  }
`
export const BoxEstadoDisplay = styled.div`
  display: flex;
  width: 1000px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 1800px){
    width: 800px;
  }
`
export const BoxDisplay = styled.div`
  margin-top: 80px;
  display: grid;
  grid-auto-flow: dense;
  gap: 15px;
  align-content: center;
  grid-template-rows: repeat(auto-fill, minmax(140px, 1fr));
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;
  @media screen and (max-width: 1600px){
    margin-left: 15px;
    justify-items: center;
    gap: 15px;
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 1500px){
    margin-left: 15px;
    justify-items: center;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
  `

  export const CSVStyledLink = styled(CSVLink)`
    height: 100%;
    text-decoration: none;
  `

  export const DisplayResumen = styled.div`
    background: #131523;
    color: #fff;
    width: 220px;
    height: 140px;
    border-radius: 10px;
    text-align: center;
    @media screen and (max-width: 1600px){
      width: 226px;
      height: 188px;
  }
  `
  export const DisplayImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    img{
      width: 30px;
      height: 20px;
    }
    h4{
      font-size: 13px;
    }
  `
  export const DisplayIcono = styled.div`
    display: flex;
    padding: 20px 20px 10px 20px;
    justify-content: space-between;
    align-items: center;
  `
  export const DisplayNumber = styled.div`
    h4{
      font-size: 34px;
    }
    h5{
      font-size: 13px;
      font-weight: 500;
    }
  `

export const BoxEstadoText = styled.div`
  color: ${props => props.color};
  h3{
    font-size: 48px;
    font-weight: 600;
  }
  h2{
    font-size: 28px;
    font-weight: 600;
    color: #4D4F5C;
  }
`
export const TimeUpdate = styled.div`
  display: flex;
  justify-content: end;
`
export const TimeUpdateBox = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  h4{
    font-size: 50px;
    font-weight: bold;
    color: #0438AF;
  }
  p{
    display: inline;
    color: #131523;
  }
  span{
    color: #7E84A3;
  }
  h2{
    font-size: 22px;
    font-weight: 500;
    color: #7E84A3;
  }
`