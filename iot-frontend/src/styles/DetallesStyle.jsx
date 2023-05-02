import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Conternedor = styled.div`
    
`
export const BoxDetalle = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DetallesDatos = styled.div`
    h3{
        font-size: 26px;
        
        font-weight: bold;
    }
    p{
        padding-top: 7px;
        font-weight: 700;
        font-size: 15px;
    }
`
export const Span = styled.span`
        color: ${props => props.detalle==="saludable"?"#10ce91":"#f0142f"};
`
export const BoxContainer = styled.div`
        margin-top: 20px;
        display: flex;
        gap: 30px;
        @media screen and (max-width: 1400px) {
            flex-direction: column;
        }
`
export const BoxIzquierda = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
`
export const BoxIzquierdaData = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    @media screen and (min-width: 1400px) {
        flex-direction: column;
        background: transparent;
        margin-bottom: 0px;
    }

    
`
export const DatosBox1 = styled.div`
    display: flex;
    background: #fff;
    border-radius: 10px;
`
export const DispositivoBox = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    img{
        object-fit: cover;
    }
`
export const DatosBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;
    font-family: "Helvetica Neue",sans-serif;
    p{
        font-weight: bold;
    }
    span{
        font-weight: normal;
    }
`
export const HistorialStyle = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 30px 20px;
    h3{
        padding: 0 0 20px 20px;
        color: #3257db;
        font-size: 20px;
    }
`
export const ContenedorBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        background: #83868b;
        padding: 10px 80px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
`
export const BoxOpcionesData = styled.div`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    @media screen and (min-width: 1400px) {
        flex-direction: column;
        background: transparent;
    }
`
export const OpcionTabla = styled.div`
    background-color: #fff;
    margin-top: 20px;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;
    h3{
        color: #3257db;
        font-size: 20px;
        line-height: 17px;
        font-weight: 600;
        padding-bottom: 10px;
    }
    select{
        background: #fff;
        text-align: center;
        width: 325px;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        border: 1px solid #7e84a3;
        cursor: pointer;
        &:focus{
            border: 3px solid #0075FF;
            outline: none;
        }
        @media screen and (max-width: 1400px) {
            width: 250px;
            height: 50px;
        }
    }
`
export const BoxDerecha = styled.div`
    width: 100%;
`
/*Detalles Co2 */
export const ContenedorSensor = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    @media screen and (max-width: 1500px) {
        grid-template-columns: 1fr;
    }
`
export const BoxSensor = styled.div`
    width: 100%;
    h3{
        font-size: 26px;
        line-height: 30px;
        font-weight: bold;
        font-family: sans-serif;
        span{
            color: #3257db;
        }
    }
    p{
        margin-top: 10px;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
    }
`
export const SpanCo2 = styled.span`
    &.Moderado{
        color: #ffdd00;
        font-weight: bold;
        
    }
    &.Malo{
        color: #f0142f;
        font-weight: bold;
        
    }
    &.Excelente{
        color: #10ce91;
        font-weight: bold;
        
    }
`
export const Magnitudes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media screen and (max-width: 1500px) {
        margin-top: 20px;
    }
`
export const LinkMagnitudes = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
    border: 2px solid #aaa;
    font-size: 15px;
    font-weight: 500px;
    text-decoration: none;
    padding: 10px 30px;
    text-align: center;
    &.urlActual{
        background: #3257DB;
        color: #fff;
        border: 2px solid #3257DB;
      }
      @media screen and (max-width: 1390px) {
            padding: 10px 0px;
        }
`
export const FiltrarBtn = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    outline: none;
    border-radius: 10px;
    border: 0;
    background: transparent;
    color: #7e84a3;
    cursor: pointer;
    /* @media screen and (max-width: 1500px) {
        grid-column-start: 1;
        grid-row-start: 1;
        justify-self: start;
    } */
    button{
        border: 2px solid #aaa;
        height: 100%;
        padding-left: 15px;
        padding-right: 25px;
        outline: none;
        border-radius: 10px;
        background: #ffff;
        color: #7e84a3;
        &:hover{
        color: #fff;
        background: #3257db;
        }
    }
`
export const Contenedor2 = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 40px;
    width: auto;
    height: 100%;
    @media screen and (max-width: 1500px) {
        flex-direction: row-reverse;
        gap: 20px;
    }
`
export const BoxIzquierdaCo2 = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    width: 500px;
    height: 100%;
`
export const DispositivoBoxCo2 = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
        img{
            width: 300px;
            object-fit: cover;
        }
`
export const DispositivoDataCo2 = styled.div`
    padding: 0 0 50px 20px;
    /* @media screen and (max-width: 1500px) {
        padding: 0 0 50px 50px;
    } */
    p{
        font-weight: bold;
    }
    span{
        font-weight: normal;
    }
    
`