import { motion } from 'framer-motion'
import styled from 'styled-components'

export const BoxTable = styled.div`
    width: 100%;
    /* max-width: 1000px; */
    background-color: #fff;
    padding: 20px 10px;
    font-family: sans-serif;
    margin-top: 20px;
    border-radius: 10px;
    @media screen and (max-width: 1000px) {
        background-color: transparent;
    }
`
export const TableStyle = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    table-layout: auto;
    @media screen and (max-width: 1000px) {
        border: 0px;
    }
`
export const Thead = styled.thead`
    text-align: left;
    padding: 10px;
    text-align: center;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
export const Tr = styled.tr`
    color: #000;
    border-bottom: 0.5px solid #e6e6e6;
    @media screen and (max-width: 1000px) {
        margin-bottom: 18px;
        outline: 4px solid #ccc;
        display: block;
    }
`
export const Tbody = styled(motion.tbody)`
    /* border: 1px solid #ccc; */
`
export const Th = styled.th`
    font-size: 15px;
    padding: ${props => props.posicion==="start" ? "15px" : "15px 0px"};
    text-align: ${props => props.posicion==="start" ? "start" : "center"};
    background-color: #f5f6fa;
    color: #4D4F5C;
    font-weight: 700;
    vertical-align: ${props => props.sub ? 'sub' : 'inherit'};
    @media screen and (max-width: 1500px) {
        padding: 10px 0px; 
    }
    @media screen and (max-width: 1000px) {
        font-size: 12px;
    }
`
export const Td = styled.td`
    font-size: 15px;
    padding: 15px 0px;   
    color: #7e84a3;
    text-align: center;
    /* border-bottom: 0.5px solid #e6e6e6; */
    img{
        object-fit: cover;
    }
    span{
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    ${props=>props.status && 'text-align: start;'}

    ${Tr}:hover &{
        background-color: rgba(0, 0, 0, 0.1);
        cursor: default;
        color: #000;
        &:hover{
            background-color: rgba(0, 0, 0, 0.2);
            /* color: #000; */
            &:last-child{
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
    }

    @media screen and (max-width: 1500px) {
        padding: 12px 0px; 
    }
    @media screen and (max-width: 1000px) {
        font-size: 12px;
        display: block;
        border-bottom: 1px solid #ccc;
        text-align: right;
        padding-right: 20px;
        background-color: #fff;

        &:last-child{
            border-bottom: 0px;
        }
        &::before{
            content: attr(data-label);
            font-weight: bold;
            float: left;
            padding-left: 20px;
        }
    }
`
export const BtnTablaEditar = styled.button`
        border: none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        width: 50px;
        background: transparent;
        color: ${props => props.btnColor==="edit"? "rgb(88, 88, 221)": "#f01c35"};
        
        @media screen and (max-width: 1000px) {
            text-align: right;
            width: auto;
            padding-left: 15px;
    }
`
/*Paginacion*/
export const PaginacionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 0px 0px;
    align-items: center;

    @media screen and (max-width: 1200px){
        ${props => props.detalles ? 'flex-direction: column;': null}
        ${props => props.detalles ? 'gap: 20px;': null}
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
`
export const CantidadResultados = styled.div`
    padding-left: 20px;
    h3{
        color: #7e84a3;
        font-size: 16px;
    }
    @media screen and (max-width: 600px) {
            padding-left: 0px;
        }
`
export const PaginacionBox = styled.div`
    ul.pagination {
        display: inline-block;
        padding: 0;
        margin: 0;
    }

    ul.pagination li {
        display: inline;
        cursor: pointer;
    }

    ul.pagination li a {
        color: #7e84a3;
        padding: 8px 12px;
        text-decoration: none;
        font-weight: bold;
    }

    ul.pagination li a:hover {
        background-color: #0438af;
        border-radius: 4px;
        color: white;
    }

    ul.pagination li.anterior a:hover,
    ul.pagination li.siguiente a:hover {
        background-color: #0438af;
        color: white;
    }

    ul.pagination li.anterior a,
    ul.pagination li.siguiente a{
        color: #3257db;
    }

    .activePaginacionFondo{
        background-color: #3257db;
        border-radius: 4px;
        color: white;
    }
    
    ul.pagination li a.activePaginacionFondo{
        color: white
    }
`
/*Monitoreo medico*/
export const BtnActualizar = styled.button` 
    text-align: center; 
    font-size: 16px;
    color: white;
    background-color: #7E84A3;
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 5px;
    padding: 10px 20px;
    /* &:hover{
      color: #000;
    } */
`
export const BoxActualizar = styled.div`
    display: flex;
    font-size: 18px;
    padding-right: 10px;
    span{
        text-align: center;
    }
`
export const TooltipActualizar = styled.div`
    /* width: 180px; */
    /* text-align: center; */
    position:absolute;
    /* bottom: 0px;
    left: -150px; */
    background: #000;
    font-size: 14px;
    padding: 10px 12px;
    border-radius: 100px;
    /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1); */
    opacity: 0;
    pointer-events: none;
    /* transition: all 0.4s cubic-bezier(0.68, -0.55,0.265,1.55); */

    ${BtnActualizar}:hover & {
      opacity: 1;
      pointer-events: auto;
      color: #fff;
      font-weight: bold;
      position: absolute;
      /* bottom: -50px;
      z-index: 10; */
      
    }
    /* ${BtnActualizar} &:before{
      position: absolute;
      content: "Actualizar";
      height: 15px;
      width: 15px;
      background: #000;
      top: -8px;
      right: -5px;
      transform: translateX(-50%) rotate(-45deg);
      z-index: 10;
    } */
`
export const BtnEstados = styled.button`
    border: none;
    color: #F5F6FA;
    width: 123px;
    padding: 8px 0px;
    text-decoration: none;
    font-weight: normal;
    border-radius: 5px;
    background: ${props => props.colorBtn==="saludable"?"#10ce91":"#f0142f"};
`
export const BtnDetalles = styled.button`
    width: 132px;
    padding: 8px 0px;
    font-size: 12px;
    font-weight: bold;
    background-color: white;
    color: #3257db;
    border: 2px solid #3257db;
    border-radius: 50px;
    cursor: pointer;
`
/*Detalles Monitoreo */
export const TablasDetalles = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 0px 30px;
    padding-bottom: 20px;
    font-family: sans-serif;
    @media screen and (max-width: 1000px) {
        background-color: transparent;
    }
`
export const ContenedorTime = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px; 
    /* @media screen and (max-width: 1400px) {
        flex-direction: column;
        gap: 20px;
    } */
`
export const BoxTime = styled.div`
    display: flex;
`
/*Vacuna*/
export const VacunaStyle = styled.div`
    display: flex;
    gap: 25px;
`
export const BtnVacuna = styled.button`
    text-align: center;
    height: 45px;
    width: 243px;
    outline: none;
    border-radius: 5px;
    border: 0;
    background: #f5f6fa;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 1000px) {
        background-color: #fff;
    }
`
export const BtnDescarga = styled.button`
    text-align:center;
    height: 45px;
    width: 172px;
    outline: none;
    border-radius: 5px;
    border: 0;
    background: #0438af;
    color: #fff;
    cursor: pointer;
`
export const TablaPhone = styled.div`
    
    span{
        color: blue;
        font-weight: bold;
        background: #f5f6fa;
        border-radius: 10px;
        padding: 8px 20px;
    }
`
/*Monitoreo Ambiente */
export const BtnEstadosAmbiente = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    width: 123px;
    padding: 8px 0px;
    text-decoration: none;
    font-weight: normal;
    border-radius: 5px;
    &.Moderado{
        background-color: #ffdd00;
        color: #000;
    }
    &.Malo{
        background-color: #f0142f;
        color: #fff;
    }
    &.Excelente{
        background-color: #10ce91;
        color: #fff;
    }
`