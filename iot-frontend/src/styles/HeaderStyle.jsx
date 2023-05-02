import styled from 'styled-components';

export const ContenedorHeader = styled.div`
  background: #FFFFFF;
  border-bottom: 1px solid #ccc;
`
export const ContenedorBotones = styled.div`
    padding: 20px 50px;
    display: flex;
    /* cursor: pointer; */
    justify-content: space-between;
    @media screen and (max-width: 1500px) {
        padding: 20px 40px; 
    }
`
export const Boton = styled.div`
    height:50px;
    width:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
    font-size: 16px;
    border-radius: 50%;
    color: ${props => props.color==="azul" ? '#3963c5' : '#61636F'};
    background-color: #f5f6fa;
    cursor: pointer;
    &:hover{
      background: #57b8ff;
      color: #fff;
    }
`
export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  gap: 26px; 
`
export const Box1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  color: gray;
  p{
    font-size: 0.6em;
  }
`
export const Tooltip = styled.div`
    width: 180px;
    text-align: center;
    position:absolute;
    bottom: 0px;
    right: 0px;
    background: #fff;
    font-size: 20px;
    padding: 10px 18px;
    border-radius: 25px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.68, -0.55,0.265,1.55);

    ${Boton}:hover & {
      opacity: 1;
      pointer-events: auto;
      bottom: -50px;
      color: blue;
      font-weight: bold;
      position: absolute;      
    }
    ${Boton} &:before{
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      background: #fff;
      top: -8px;
      right: -5px;
      transform: translateX(-50%) rotate(-45deg);
    }
    @media screen and (max-width: 1500px) {
      right: 0px;
      font-size: 15px;
    }
`

export const FilterHeaderContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #7F86AA;
    padding: 14px 28px;
    width: 100%;
`

export const HeaderFilterDateButton = styled.button`
  background-color: ${props=>props.act ? '#57B8FF' : 'white'};
  border: 1px solid ${props=>props.act ? 'transparent' : ' #a3a6b4'};
  border-radius: 4px;
  padding: 10px 38px;
  color: ${props=>props.act ? 'white' : 'black'}
`

export const RoomTitle = styled.p`
    color:white;
    font-size: 24px
`

export const DateFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap:8px;
  p{
    white-space:nowrap;
    color: white;
    margin-right: 12px
  }
`