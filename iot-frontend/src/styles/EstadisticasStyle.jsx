import styled from "styled-components";

export const EstadisticasPageWrapper = styled.div`
  margin-top: 40px;
  padding: 20px 0;
`

export const ContenedorNavEstadisticas = styled.div`
    display: flex;
    flex-direction: row;
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

export const EstadisticaTopFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      color:blue;
    }
`

export const EstadisticaOption = styled.div`
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A3A6B4;
    border-radius: 4px;
    padding: 0px 16px;
    cursor: pointer;
    color: #000;
    background-color: #fff;
    &.disabled{
        pointer-events:none;
        background-color: gray;
        color: white;
    }
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

export const EstadisticaBox = styled.div`
  background-color: #fff;
  padding: 30px 20px 10px 20px;
  border-radius: 10px;
  margin-top: 14px;
  h1{
    font-weight: normal;
    font-size: 1.6em;
  }
`

export const BubbleLabel = styled.div`
  background-color: black;
  padding: 10px;
`

export const TendenciaFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  box-sizing: border-box;
  gap: 18px;
  margin-top: 14px;
`

export const TendenciaBox = styled.div`
  background-color: #fff;
  padding: 30px 20px 20px 20px;
  border-radius: 10px;
  width: 100%;
  h1{
    font-weight: normal;
    font-size: 1.6em;
  }
  img{
    height: 100px;
  }
`

export const TitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OptionalFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 14px;
  span{
    color: gray;
  }
`

export const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const PaginationButton = styled.button`
  border: 0;
  background-color: #3257DB;
  padding: 10px 14px;
  border-radius: 4px;
  i{
    color: white;
    font-size: 1.2em;
    font-weight: 600;
  }
  &:disabled{
    background-color: #D7DBEC;
    i{
      color: #7E84A3;
    }
  }
`

export const MiniFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const BlueExtra = styled.p`
  color: blue;
`

export const ButtonExtra = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #131523;
  color: white;
  padding: 6px 8px;
  border: 0;
  border-radius: 4px;
  img{
    width: 22px;
  }
`

export const ContentFlex = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  align-content: center;
  margin-top: 20px;
  gap: 14px;
  align-items: center;
`

export const FindingsFlex = styled.div`
  display: grid;
  grid-template-rows: repeat(3,1fr);
  gap: 10px;
  height: 100%;
  width: 100%;
`

export const PeaksFlex = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
  align-items: center;
  align-content: center;
  align-self: center;
  justify-self: center;
  gap: 10px;
  width: 100%;
  height: 100%;
`

export const Advice = styled.div`
  width: 100%;
  height: ${props=>props.full ? '100%' : 'initial'};
  min-height: 32px;
  background-color: #F5F6FA;
  position: relative;
  display: inline-block;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2px;
  padding: ${props=>props.full ? '0 34px' : '8px 4px 8px 0'};
  vertical-align: middle;
  align-items: center;
  color: gray;
  font-size: 0.72em;
  text-align: ${props=>props.full ? 'center' : 'end'};
  border-radius: 2px;
  p{
    position: absolute;
    top: 50%;
    left: 50%;
    translate -50% -50%;
  }
  * + span{
    margin: 0 4px;
  }
  span + *{
    margin-left: 4px;
  }
`

export const ColorfulSpan = styled.span`
  display: inline-block;
  color: ${props=>props.color}
`

export const Safe = styled.span`
  color: #57D2A9;
`

export const Mid = styled.span`
  color: #FEBC2D;
`

export const Low = styled.span`
  color: #F0142F;
`

export const BackdropGray = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: gray;
  opacity: 0.4;
`

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding: 48px 35px;
  border-radius: 14px;
  background-color: white;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  min-width: 500px;
`

export const ModalHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-bottom: 24px;
`

export const ModalTitle = styled.h1`
  color: #0438af;
  font-weight: 800;
  font-size: 1.4em;
  text-align: center;
`

export const ModalClose = styled.button`
  position: absolute;
  right: 0;
  border: 1px solid #B2B2B8;
  border-radius: 100px;
  font-size: 17px;
  color: #0438AF;
  text-align: center;
  width: 38px;
  height: 38px;
  background-color: transparent;
`

export const PeakGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,108px);
  gap: 24px;
`

export const PeakDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props=>props.color};
  color: white;
  border-radius: 4px;
  padding: 14px 6px;
` 

export const PatternBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 12px 4px;
  ul{
    list-style: none;
  }
  li::before{
    content: "•";
    color: blue;
    margin: 0 4px;
  }
  span{
    margin: 0 4px;
  }
  p{
    padding: 12px 18px;
    max-width: 460px;
    text-align: center
  }
`
