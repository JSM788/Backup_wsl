import { CSVLink } from 'react-csv'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FlexHeader = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    margin-top: 60px;
    align-items: center;
    margin-bottom: 20px;
`

export const StyledInput = styled.input.attrs({type:'date'})`
    border: 1px solid #a3a6b4;
    color: #000000c9;
    padding: 10px 12px;
    font-size: 16px;
    border-radius: 2px;
`

export const ChangePageButton = styled(Link)`
    color: #4D4F5C;
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: white;
    border: 1px solid #7E84A3;
    border-radius: 4px;
    height: min-content;
    padding: 8px 12px;
    font-size: 16px;
    text-decoration: none;
    transition: 0.4s all;

    &:hover{
        background-color: #131523;
        color: white;
        border: 1px solid #131523;
    }
`

export const ResumenAlertas = styled.div`
  height: min-content;
  width: min-content;
  background-color: #fff;
  padding: 30px 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FilterContainer = styled.div`
    display: block;
    position: absolute;
    right: 0;
    z-index: 1;
    transform: translateY(160px);
    padding: 30px;
    cursor: auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.18);
    h2{
        color: black;
        margin-bottom: 18px;
    }
`

export const NumeroAlertas = styled.div`
    color: ${props => props.solved ? '#57D2A9' : '#57B8FF'};
    font-size: 64px;
    font-weight: 1000;
`

export const AlertCounter = styled.div`
    margin-top: 20px;
    position: relative;
    width: ${props => props.display ? "250px" : "200px"};
    height: ${props => props.display ? "250px" : "150px"};
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
        width: ${props => props.display ? "250px" : "200px"};
        height: ${props => props.display ? "250px" : "200px"};
        border: 10px solid;
        border-color: ${props => props.colorsi1}${props => props.colorno1} ${props => props.colorno2} ${props => props.colorsi2};
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

export const UnsolvedCases = styled.div`
    background-color: ${props=>props.solved ? '#57D2A9' : '#57B8FF'};
    border-radius: 99px;
    color: white;
    width: fit-content;
    font-size: 18px;
    margin: 20px auto;
    padding: 14px 34px;
`

export const HeadDivider = styled.div`
    display: flex;
    width: 420px;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding: 14px 20px;
    border-bottom: 2px solid #EEF0F7;
    margin-bottom: 16px
`

export const LeftTitle = styled.p`
    font-size:20px;
    color: #505061;
    &:
`

export const RightTitle= styled.p`
    color:#4649ED;
    font-size: 15spx;
`

export const AlertNav = styled.div`
    display: grid;
    gap: 10px;
    width: 100%;
    justify-content: ${props => props.flex ? 'start' : 'end'};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    a{
        text-decoration: none;
    }

    /* @media screen and (max-width: 1920px){
        flex-wrap: wrap;
    } */

    a{
        text-decoration: none;
    }
    @media screen and (max-width: 1919px){
        grid-template-columns: repeat(2, 1fr);
        grid-wrap: wrap;
    }  */
`

export const ContenedorNavAlertas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
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

export const NavButton = styled.div`
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
    &.disabled{
        background-color: gray;
        pointer-events: none;
    }
`

export const TableContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 36px 20px;
    font-family: sans-serif;
    @media screen and (max-width: 1000px) {
        // background-color: transparent;
    }
`

export const ReportFlex = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 18px;
`

export const FilterBox = styled.div`
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const DefaultValueBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
`

export const FilterDateButton = styled.button`
    background-color: ${props=>props.act ? '#57B8FF' : 'transparent'};
    border: 1px solid ${props=>props.act ? 'transparent' : ' #a3a6b4'};
    border-radius: 4px;
    padding: 10px 6px;
    width: 100%;
    color: ${props=>props.act ? 'white' : 'black'}
`

export const CSVStyledLink = styled(CSVLink)`
    height: 100%;
    text-decoration: none;
`

export const UpdateBox = styled.div`
    display: flex;
    justify-content: end;
    padding: 15px 10px;
    span{
        text-align: center;
    }
`

export const UpdateButton = styled.button`
    text-align: center; 
    font-size: 16px;
    color: white;
    background-color: #7E84A3;
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 4px;
    padding: 10px 16px;
`

export const CommentButton = styled.button`
    border: 0px;
    text-decoration: underline;
    color: #4169E1;
    background: none;
`

export const Icon = styled.img`
    width: 24px;
    margin-left: 4px;
    margin-right: 10px;
    vertical-align: middle;
`

export const IconLabel = styled.p`
    line-height: 10px;
    display: inline-block;
    vertical-align: middle;
`

export const Switcher = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`

export const InvisibleCheckbox = styled.input.attrs({type:'checkbox'})`
    opacity: 0;
    width: 0;
    height: 0;
`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E5E7EB;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before{
        position: absolute;
        content: "NO";
        line-height: 26px;
        font-size: 10px;
        margin-top: 0px;
        color: white;
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #F0142F;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    ${InvisibleCheckbox}:checked{
        background-color: #2196F3;
    }
    ${InvisibleCheckbox}:focus{
        box-shadow: 0 0 1px #2196F3;
    }
    ${InvisibleCheckbox}:checked + &:before{
        content: "SI";
        background-color: #57D2A9;
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`

export const ModalContainer = styled.div`
    padding: 30px 60px 60px 60px;
    background-color: white;
    z-index: 1;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 16px;
    transform:translate(-50%,-50%);
`

export const ModalBackground = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: gray;
    opacity: 0.6;
    top: 0;
    left: 0;
    content: "";
    position: fixed;
`

export const ModalClose = styled.button`
    border: 1px solid #B2B2B8;
    border-radius: 100px;
    font-size: 17px;
    color: #0438AF;
    display: block;
    margin-left: calc(100% - 10px);
    text-align: center;
    width: 46px;
    height: 46px;
    background-color: transparent;
`

export const ModalTitle = styled.h2`
    margin: 25px;
    color: #0438AF;
    text-align: center;
`

export const ModalDescription = styled.p`
    margin-bottom: 30px;
    margin-left: 12px;
    margin-right: 12px;
    color: #7E7F88;
    text-align: center;
`

export const ModalInput = styled.textarea`
    background-color: #F4F4F4;
    width: 100%;
    height: 180px;
    font-size: 14px;
    border-style: dashed;
    padding: 20px;
    resize: none;
    font-family: Arial;
    &::placeholder{
        vertical-align: middle;
        font-family: 'Montserrat'
    }
`

export const ModalSubmit = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 16px;
    border: 0;
    border-radius: 5px;
    color: white;
    background-color: #131523;
`