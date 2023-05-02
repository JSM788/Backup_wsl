import styled from 'styled-components'


export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    /* @media screen and (max-height: 900px) {
        padding: 80px;
    } */
`
export const ContenedorModal = styled.div`
    /* min-height: 600px; */
    background: #fff;
    position: relative; 
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 40px;

    @media screen and (max-height: 1000px) {
        /* height: 820px; */
        padding: 0;
    }

    @media screen and (max-height: 850px) {
        /* height: 650px; */
        padding: 0px;
    }
`
export const CerrarModalStyle = styled.button`
    position: absolute;
    top: 30px;
    right: ${props => props.medicioncerrar ? '20px' : '50px'};
    top: ${props => props.medicioncerrar ? '20px' : '30px'};
    width: 38px;
    height: 38px;
    text-align:center;
	border-radius: 50%;
	color: #fff;
	border: none;
	background: #000;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
    font-size: 14px;
	font-weight: 500;
	transition: background-color .3s ease ;

    &:hover {
        background: #0066FF;
    }
`
export const ContenedorModalBasico = styled.div`
    width: 512px;
    /* height: 307px; */
    min-height: 100px;
    background: #fff;
    position: relative; 
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 40px;
    h3{
        padding-top: 40px;
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    p{
        font-size: 25px;
        line-height: 28px;
        margin-bottom: 50px;
        font-weight: normal
    }
    @media screen and (max-height: 800px) {
        width: 420px;
        /* height: 300px; */
        h3{
            padding-top: 20px;
            font-size: 20px;
        }
        p{
            font-size: 18px;
            margin-bottom: 20px;
        }
    }
`
export const BotonModal = styled.button`
    padding: 20px 50px;
    margin: 0 10px;
	border-radius: 5px;
	color: #fff;
	border: none;
	background: ${props =>props.deleteStyle==="eliminar"?"#3257db":"#131523"};
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
    &:hover{
        background: ${props =>props.deleteStyle==="eliminar"?"#fd1a12":"#3f4e83"};
    }
`
export const BotonStyle = styled.button`
    padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
    &:hover{
        background: #0066FF;
    }
`
export const BotonOrder = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
	transition: .3s ease all;
    border: 3px solid ${props => props.activado==="activadoF" ? '#0066FF' : '#a3a6b4'};
    color: ${props => props.activado==="activadoF" ? '#fff' : '#000'};
    background-color: ${props => props.activado==="activadoF" ? '#0066FF' : '#fff'};
    cursor: pointer;
    font-size: 18px;
    &:hover{
        border: 3px solid #0075FF;
    }
`
 
export const ContenedorModalMedicion = styled.div`
    /* min-height: 600px; */
    background: #fff;
    position: relative; 
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 30px 30px 40px 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.88em;

    @media screen and (max-width: 1400px) {
        width: 450px;
    }
`
export const ImgModal = styled.div`
    img{
        object-fit: cover;
        margin-bottom: 18px;
        width: 180px;
    }
    @media screen and (max-width: 1400px) {
       img{
            width: 150px;
            margin-bottom: 10px;
       }
    }
`
export const Medicion = styled.div`
    p{
        font-size: 16px;
        padding: 0 25px;
        text-align: center;
    }
    p+p{
        margin-top: 18px;
    }
    @media screen and (max-width: 1400px) {
       p{
            font-size: 14px;
            padding: 0 20px;
       }
    }
`
export const TextConsejo = styled.h1`
    margin-top: 0px;
    color: ${props => props.color};
    font-size: 26px;
    font-weight: 900;
    @media screen and (max-width: 1400px) {
        margin-top: 20px;
        font-size: 20px;
    }
`
export const BoxConsejo = styled.div`
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 20px;
    background: #131523;
    padding: 5px 50px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 1400px) {
        font-size: 16px;
        padding: 5px 30px;
    }
`

export const FuentesTitle = styled.div`
    margin: 24px 0;
    background-color: #0438af;
    border-radius: 100px;
    padding: 4px 48px;
    color: white;
    font-size: 1.4em
`

export const FuentesFlex = styled.div`
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 100px);
    img{
        width: 40px;
        margin-bottom: 8px;
    }
    p{
        font-size: 0.85em;
    }
`

export const ConsecuenciasGrid = styled.div`
    display: grid;
    gap: 14px 20px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    img{
        width: 40px;
        margin-bottom: 8px;
    }
    p{
        font-size: 0.85em;
    }
`

export const MainImgModal = styled.div`
    img{
        object-fit: cover;
        width: 180px;
    }
    @media screen and (max-width: 1400px) {
        img{
            width: 140px;
        }
    }
`