import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
  padding-top: 10px;

  @media (max-height: 700px) {
    padding-top: 6px;
    font-size: 12px;
  }
`

export const ContenedorUl = styled.ul`
  margin-top: 10px;
  margin-bottom: ${(props) => (props.co2 ? "5px" : "10px")};
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const ContenedorLi = styled.li`
  list-style: none;
  text-align: center;
  overflow: hidden;
  font-size: 0.9em;
`
export const ContenedorSeccion = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 10px 10px;
  background: #57B8FF;
  color: #fff;
  cursor: pointer;
  margin: 0 20px;
  border-radius: 4px;
`
export const BoxIconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const DownArrow = styled.i`
  transition: all 0.1s;
  transform: ${props=>props.show ? 'rotate(0deg)' : 'rotate(-90deg)'}
`

export const ListShow = styled.ul`
    width: 85%;
    margin-left: auto;
    list-style: none;
    transition: all 0.2s;
    max-height: ${(props) => (props.show ? "200px" : "0px")};
`
export const Li = styled.li`
    display: flex;
    align-items: center;
    margin: 20px 0px;
   
    a{
      text-decoration: none;
      color: #fff;
      &.link__actual{
        color: #67e0ff;
      }
    }
    @media (max-height: 700px) {
      margin: 15px 0px;
  }
    
`
export const LinkList = styled(NavLink)`
  display: flex;
  gap: 15px;
  align-items: center;
  
  &:hover{
    color: #67e0ff;
  }
`