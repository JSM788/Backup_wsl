import styled from 'styled-components'
import { CSVLink } from "react-csv";

export const ContenedorIndicador = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;
    padding-top: 60px;
    /* @media screen and (max-width: 1919px){
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    } */
    @media screen and (max-width: 1500px){
        gap: 200px;
    }
    @media screen and (max-width: 1350px){
        gap: 100px;
    }
`
export const HeaderButton = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #57B8FF;
    color: white;
    height: 100%;
    padding: 12px 12px;
    border: 0;
    border-radius: 4px;
    img{
        padding-bottom: 4px;
    }
`

export const ContenedorNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.flex ? 'start' : 'end'};
    gap: 10px;
    flex-wrap: wrap;
    a{
        text-decoration: none;
        &.disabled{
            pointer-events: none;
            color: white;           
        }
        .disabled{
            background-color: gray;
            color: white; 
        }
    }

    /* @media screen and (max-width: 1920px){
        flex-wrap: wrap;
    } */
    
    /* display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 1919px){
        grid-template-columns: repeat(7, 1fr);
        grid-wrap: wrap;
    }  */
`
export const ContentLarge = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BoxOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    a{
        text-decoration: none;
    }
`
export const Option = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A3A6B4;
    border-radius: 4px;
    padding: 0px 16px;
    cursor: pointer;
    color: #000;
    background-color: #fff;
    img{
        width: 25px;
    }
    h4{
        font-weight: normal;
    }
    &.link__actual{
        color: #FFF;
        background-color: #3257DB;
        border: 1px solid #3257DB;
      }
      @media screen and (max-width: 1500px){
        /* padding: 0px 30px; */
    }
`
export const MainIndicador = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1600px){
        flex-direction: column;
    }
`
export const TablaCO2Container = styled.div`
    display: block;
`
export const BoxIndicador = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 1600px){
        flex-direction: row;
        gap: 20px;
    }
`
export const FiltrosBox = styled.div`
    background-color: #fff;
    border-radius: 15px;
    /* width: 610px;
    height: 416px; */
    padding: 50px 30px;
    h3{
        color: #131523;
        font-size: 28px;
        font-weight: 600;
    }
    p{
        color: #0438AF;
        margin-top: 16px;
        font-size: 16px;
        font-weight: normal;
    }
    @media screen and (max-width: 1400px){
        width: 450px;
    }
    /* @media screen and (max-width: 1280px){
        width: 380px;
    } */
    
`
/*Promedios*/
export const ContenedorPromedios = styled.div`
   width: 100%;
`
export const PromedioBox = styled.div`
    padding: 30px;
    background-color: #fff;
    border-radius: 15px;
    width: 610px;
    height: 100%;
    @media screen and (max-width: 1600px){
        width: 100%;
        padding: 50px 20px;
    }
`

export const PromedioFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${props=>props.gap && '10px'}
`

export const Progress = styled.div`
    margin-top: 20px;
    position: relative;
    width: 250px;
    height: 200px;
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
        
        left: 0;
        top: 0;
        width: 250px;
        height: 250px;
        border: 10px solid;
        border-color: ${props => props.color};
        border-radius: 50%;
        transform: rotate( calc( 1deg * ( -130 + ${props=> props.porcentage} * 1.8 ) ) );
        transition: 1s ease all;
   }
    @media screen and (max-width: 1350px){
        width: 200px;
        height: 150px;
        &:after{
            width: 200px;
            height: 200px;
        }
    }
    
`
export const ProgressNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        font-size: 30px;
    }
    @media screen and (max-width: 1350px){
        span{
        font-size: 20px;
        }
    }
`
export const ProgressNumberText = styled.h2`
        color: ${props => props.colorsi1};
        font-size: 80px;
        font-weight: bold;
        @media screen and (max-width: 1350px){
        font-size: 50px;
        }
`
export const ProgessEstado = styled.h2`
    text-align: center;
    color: ${props => props.colorsi1};
`
export const RangoEstados = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 10px;
    @media screen and (max-width: 1600px){
        margin-top: 0px;
    }
`
export const RangoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 10px;
    background-color: #F5F6FA;
    border-radius: 5px;
    span{
        color: #7E84A3;
        font-size: 12px;
    }
`
export const SVGLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    p{
        font-size: 12px;
    }
    img{
        width: 20px;
    }
`
export const RangoBotones = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
`
export const BotonesModales = styled.button`
    border-radius: 5px;
    border: none;
    background-color: ${props => props.btncolor};
    color: #fff;
    font-size: 15px;
    width: 100%;
    padding: 10px 0;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 1500px){
        font-size: 13px;
    }
`
/*Fin Promedios */
export const TablasIndicadores = styled.div`
    background-color: #fff;
    width: 100%;
    border-radius: 15px;
`
/*Detalles indicador */
export const DetallesIndicadores = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding: 0 30px;
`
export const Herramientas = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const CSVStyledLink = styled(CSVLink)`
    text-decoration:none;
`

export const Reporte = styled.div`
    background-color: ${props => props.dark ? '#131523' : "#3257DB"};
    color: #fff;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: ${props=>props.heightfull ? 'auto' : '100%'};
    padding: ${props=>props.pad ? '8px':'0px 28px'};
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    width: ${props=>props.full && '400px'} ${props=>props.mid && '140px'};
    a{
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DisplayToggle = styled(Reporte)`
    background-color: #131523;
`

export const BoxChange = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    border: 1px solid ${props => props.activadoApi ? '#3257DB' : '#A3A6B4'};
    background-color: ${props => props.activadoApi ? '#3257DB' : '#fff'};
    color: ${props => props.activadoApi ? '#fff' : '#000'};
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s all;
`
export const Estadisticas = styled.div`
    
`
/*Filtros */
export const FormFiltro = styled.form`
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const GridIndice = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`
export const BoxSelect = styled.div`
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
export const SelectIndicador = styled.select`
    color: #000;
    outline: 0;
    width: 100%;
    height: 42px;
    cursor: pointer;
    padding-left: 20px;
    background: #fff;
    border: 1px solid #A3A6B4;
    border-radius: 5px;
    font-size: 17px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`
export const TimeBox = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    input{
        position: relative;
        width: 100%;
        height: 42px;
        padding: 0 15px;
        background: #fff;
        border: 1px solid #a3a6b4;
        border-radius: 5px;
        outline: none;
        color: #000;
        cursor: pointer;
        font-family: sans-serif;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
    }
    @media screen and (max-width: 1500px){
        gap: 5px;
    }
`
export const InputSubmit = styled.input`
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #3257DB;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
`
