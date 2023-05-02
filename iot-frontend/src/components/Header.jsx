import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthProvider";

import {
  ContenedorHeader,
  ContenedorBotones,
  Boton,
  Box1,
  Tooltip,
  BoxIcon,
} from "../styles/HeaderStyle";

export const Header = ({ Sidebar, logout }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.pathname
  const { id } = useParams()
  const [mover, setMover] = useState(false)
  const [title, setTitle] = useState(false)
  const [subtitle, setSubtitle] = useState(false)
  const [goTo, setGoTo] = useState('')

  useEffect(() => {
    showToggler()
    includer()
  }, [url])
  

  const { cerrarSesion } = useContext(AuthContext);

  const showToggler = () =>{
    if (url === "/sistema") {
      setMover(true);
    }
    else if (url.includes("/sistema/alertas")) {
      setMover(true);
    }
    else if (url.includes("/sistema/resueltas")) {
      setMover(true);
    }
    else if (url.includes("/sistema/auditoria")) {
      setMover(true);
    }
    else if (url.includes("/sistema/monitoreoAmbiental")){
      setMover(true);
    }
    else if (url.includes("/sistema/indicadores")){
      setMover(true);
    }
    else if (url.includes("/sistema/estadisticas")){
      setMover(true);
    }
    else setMover(false)
  }

  const includer = () =>{
    if (url === "/sistema") {
      setTitle('Listado de salas')
      setSubtitle('')
    }
    else if (url.includes("/sistema/alertas")) {
      setTitle('Alertas de calidad de aire')
      setSubtitle('')
    }
    else if (url.includes("/sistema/resueltas")) {
      setTitle('Alertas resueltas')
      setSubtitle('')
    }
    else if (url.includes("/sistema/auditoria")) {
      setTitle('Auditoría')
      setSubtitle('')
    }
    else if (url.includes("/sistema/monitoreoAmbiental")){
      setTitle('Monitoreo diario de salas')
      setSubtitle('Regresar al Listado de Salas')
    }
    else if (url.includes("/sistema/indicadores")){     
      setTitle('Indicadores')
      setSubtitle('Ir a Monitoreo de Salas')
    }
    else if (url.includes("/sistema/estadisticas")){     
      setTitle('Estadísticas y tendencias')
      setSubtitle('')
    }
    else {
      setTitle('')
      setSubtitle('')
    }
  }

  const goBack = () => {
    if(url.includes("/sistema/monitoreoAmbiental")){
      if(goTo !==`/sistema`) setGoTo('/sistema')
      return true
    }
    if(url.includes('/sistema/indicadores')){
      if(goTo !==`/sistema/monitoreoAmbiental/${id}`) setGoTo(`/sistema/monitoreoAmbiental/${id}`)
      return true
    }
    if(url.includes('/sistema/resueltas')){
      if(goTo !==`/sistema/alertas`) setGoTo(`/sistema/alertas`)
      return true
    }
    return false
  }

  // const CerrarSesion = () => {
  //   cerrarSesion();
  //   logout();
  // };

  return (
    <ContenedorHeader>
      <ContenedorBotones>
        <BoxIcon>
          {mover ? (
            <Boton color="azul" menu="menu" onClick={Sidebar}>
              <span>
                <i className="fas fa-bars"></i>
              </span>
            </Boton>
          ): null}
          {title}
        </BoxIcon>
        <BoxIcon>
          {
            goBack() ? 
            <Box1>
              <p>{subtitle}</p>
              <Boton onClick={()=>navigate(goTo)}>
                <span>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </Boton>
            </Box1>
          : null}          
          {/* <Box1>
            <Boton>
              <span>
                <i className="far fa-bell"></i>
              </span>
              <Tooltip>Notificaciones</Tooltip>
            </Boton>
          </Box1>
          <Box1>
            <Boton onClick={CerrarSesion}>
              <span>
                <i className="fas fa-sign-in-alt"></i>
              </span>
              <Tooltip>Cerrar sesíon</Tooltip>
            </Boton>
          </Box1> */}
        </BoxIcon>
      </ContenedorBotones>
    </ContenedorHeader>
  );
};
