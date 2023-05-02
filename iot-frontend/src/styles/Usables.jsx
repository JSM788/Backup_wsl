import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitlePage = styled.div`
    padding-left: 10px;
    padding-bottom: ${props => props.tabla ? "0px" : "50px"};
    h1{
        font-size: 26px;
        font-weight: bold;
        line-height: 2;
        @media screen and (max-width: 600px) {
            font-size: 20px;
        }
    }
    h4{
        font-size: 15px;
        font-weight: medium;
        color: #3257db;
    }
`
export const ContenedorModulo = styled.div`
    display:flex;
    justify-content: end;
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const Opciones = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 10px;
    gap: 10px;
    @media screen and (max-width: 600px) {
        padding: 20px 0px 0px 0px;
        justify-content: center;
    }
    h2{
        font-size: 18px;
        font-weight: 600;
        color: #131523;
    }
`
export const OpcionesBtn = styled.button`
    height: 43px;
    padding-left: 15px;
    padding-right: 25px;
    outline: none;
    border-radius: 10px;
    border: 0;
    background: #ffff;
    color: #7e84a3;
    cursor: pointer;
    border: 2px solid #aaa;

    &:hover{
        color: #fff;
        background: #3257db;
        border: 2px solid #3257db;
    }
`
export const TablaContenedor = styled.div`
`
export const TablaSinDatos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    font-size: 26px;
    color: #0438af;
    div{
        text-align:center;
    }
`
/*Page urgencias */
export const ContenedorUrgencias = styled.div`
    display: flex;
    gap: 30px;
    @media screen and (max-width: 1390px) {
        gap: 20px;
    }
`
export const BoxCasos = styled.div`
    display: flex;
    background-color: #fff;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;
    padding: 10px 40px;
    border-radius: 40px;
    @media screen and (max-width: 1390px) {
        padding: 10px 20px;
    }
`
export const NumeroCasos = styled.div`
        span{
            font-weight: bold;
            color: #3257db;
            font-size: 30px;
            @media screen and (max-width: 1390px) {
                font-size: 25px;
            }
        }
`
export const NameCasos = styled.div`
    h4{
        font-size:13px;
        color: #a3a6b4;
        font-weight: medium;
    }
`
export const HistorialCasos = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    a{
        background: #fff;
        padding: 10px 40px;
        font-weight: 500;
        text-decoration: none;
        border: 2px solid #aaa;
        border-radius: 10px;
        color: #000;
    }
`
export const LinkContenedor = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`
export const LinkBox = styled(Link)`
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
export const BoxResuelto = styled.div`
    
`
export const BtnResuelto = styled.button`
    display: inline-block;
    width: 55px;
    height: 30px;
    background: #e5e7eb;
    border-radius: 100px;
    border: none;
    position: relative;
    cursor: pointer;
`
export const BtnMover = styled.div`
        position: absolute;
        display: flex;
        width: 22px;
        height: 22px;
        background: ${props => props.resueltobtn==false ? "#f0142f" : "#21d59b"};
        border-radius: 50%;
        top: 4px;
        left: ${props => props.resueltobtn===false ? "4px" : "28px"};
        transition: 0.3s;
        color: #fff;
        font-size: 12px;
        text-align: center;
        justify-content: center;
        align-items: center;
        z-index: 1;
`

/*Page Alertas*/
export const ContenedorAlertas = styled.div`
    display:grid;
    grid-template-columns: repeat(1, minmax(1000px,1fr));
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(100px,1fr));
    }
`