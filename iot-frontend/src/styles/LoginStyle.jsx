import { motion } from 'framer-motion'
import styled from 'styled-components'
import Fondo from '../assets/fondoLogin.png'

export const ContenedorLogin = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background: #0058ff;
    background-image: url(${Fondo});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: grid;
    place-content: center;
    overflow-x: hidden;
`
export const LogoBox = styled.div`
    top: 5%;
    left:5%;
    object-fit: cover;
    position: absolute;
    @media (max-width: 1000px) {
      display: flex;
      place-content: center;
      left:0;
      /* img{
        width: 70%;
      } */
    }
    @media (max-width: 800px) {
      position: relative;
      img{
        width: 70%;
      }
    }
`
export const MainBox = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* @media (max-height: 800px) {
      padding-top: 10%;
    } */
  @media (max-width: 850px) {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
`
export const Box1 = styled.div`
  p{
    font-size: 35px;
    text-align: center;
    color: #fff;
    padding-bottom: 50px;
  }
  h3{
    font-size: 70px;
    color: #fff;
    text-align: center;
  }
  img{
    display: block;
    margin: auto;
  }
  @media (max-height: 800px) {
      p{
      font-size: 15px;
      }
      h3{
        font-size: 35px;
      }
      img{
        width: 80%;
      }
    }
    @media (max-width: 850px) {
      h3{
        font-size: 25px;
      }
      p{
      font-size: 20px;
      }
      img{
        width: 80%;
      }
    }
`
export const Box2 = styled.div`
    display: flex;
    justify-content: center;
    background: #0438af;
    border-radius: 20px;
    margin: 0px 40px;
    @media (max-width: 850px) {
      margin: 40px 10px;
    }
`
export const Sesion = styled.div`
  padding: 100px 70px;
  h3{
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }
  p{
    color: #57B8FF;
    font-weight: 600;
  }
  @media (max-height: 800px) {
      padding: 50px 30px;
      p{
      font-size: 10px;
      }
      h3{
        font-size: 25px;
      }
    }
    @media (max-width: 500px) {
      padding: 20px 0px;
      h3{
        font-size: 25px;
      }
      p{
      font-size: 20px;
      }
    }
`
export const Form = styled.form`
  padding-top: 20px;
`
export const FormBox = styled.div`
position: relative;
  input{
    width: 100%;
    height: 50px;
    border: 2px solid #aaa;
    border-radius: 20px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    padding-left: 50px;
    &:focus{
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
            }
    }
  i{
    position: absolute;
    left: 0;
    top: 15px;
    padding: 9px 18px;
    color: #aaa;
    transition: 0.3s;
  }
  input:focus + i{
    color: dodgerBlue;
  }
  .btn{
    border: none;
    background: #57B8FF;
    color: #fff;
    padding-left: 0;
    cursor: pointer;
  }
`
export const ErrorFormLogin = styled.div`
  border: 0;
  border-radius: 10px;
  background: rgb(218, 71, 71);
  margin-top: 10px;
  h3{
    margin: 10px;
    font-size: 15px;
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  @media (max-width: 500px) {
      h3{
        margin: 0;
        padding: 10px 5px;
        font-size: 15px; 
      }
    }
`
