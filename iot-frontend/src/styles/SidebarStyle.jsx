import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContenedorSistema = styled(motion.div)`
width: 100%;
background-image: linear-gradient(to bottom, #0058ff, #797eff, #ada7ff, #d8d2ff, #ffffff);
`
export const BoxSistema = styled.div`
  height: 100vh;
`
export const Sidebar = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 30px;
  height: 100%;
  background: #0438af;
  width: 268px;
  left: ${props => props.activar ? '-268px' : '0'};
  transition: all 1s ease-in-out;
  ul{
    display: block;
    color:#ffffff;
    text-align: center;
    text-decoration: none;
  }
  img{
    display: block;
    margin: 0 auto;
    height: 45px;
    object-fit: cover;
  }
`

export const Username = styled.div`
  background-color: #3257DB;
  width: fit-content;
  margin: 20px auto;
  border-radius: 4px;
  font-size: 14px;
  padding: 12px 54px 12px 20px;
  position: relative;

  @media (max-height: 700px) {
    font-size: 12px;
  }
`

export const Initials = styled.div`
  font-size: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -10px;
  top: -9px;
  background-color: #3257DB;
  height: calc(100% +  16px);
  aspect-ratio: 1/1;
  border: 3px solid white;
  border-radius: 99px;
  padding: auto 0;
`

export const LogoutButton = styled.button`
  cursor: pointer;  
  display: flex;  
  align-items: center;
  margin: 0 20px;
  gap: 14px;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 1em;
  padding: 10px 18px 10px 22px;
  border-radius: 4px;

  &:hover{
    background-color: #3257DB;
  }

  @media (max-height: 700px) {
    font-size: 12px;
  }
`

export const Paginas = styled.div`
  padding-left: ${props => props.activar ? '0' : '268px'};
  background: #F5F6FA;
  height: 100vh;
  transition: all 1s ease-in-out;
  max-width: 100vw;
`
export const ContenedorPages = styled.div`
  position: relative;
  background: #F5F6FA;
  padding: 30px 50px;
  min-width: 950px;
  @media screen and (max-width: 1500px){
    padding: 30px 30px;
  }
`