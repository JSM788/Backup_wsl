import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  NavBar,
  ContenedorUl,
  ContenedorLi,
  ContenedorSeccion,
  ListShow,
  Li,
  BoxIconList,
  LinkList,
  DownArrow
} from "../styles/NavegadorStyle";
import {MdAir} from 'react-icons/md'
import {CgShapeCircle} from 'react-icons/cg'

export const Navegador = ({firstRoomId}) => {

  const location = useLocation()
  const urlActual = location.pathname

  const [show, setShow] = useState(true);

  const inclusor = (param) =>
    urlActual.includes(param) ? "link__actual" : null

  return (
    <NavBar>
      <ContenedorUl co2={show}>
        <ContenedorLi>
          <ContenedorSeccion onClick={()=>setShow(prev=>!prev)}>
            <BoxIconList>
              <MdAir size={"20px"} />
              <h4>Calidad de aire</h4>
            </BoxIconList>
            <DownArrow className={ "fas fa-chevron-down list__arrow" } show={show}/>
          </ContenedorSeccion>
          <ListShow show={show}>
            <Li>
              <LinkList
                to=""
                className={urlActual === "/sistema" ? "link__actual" : null}
              >
                <CgShapeCircle size={"12px"} />
                Listado de salas
              </LinkList>
            </Li>
            <Li>
              <LinkList
                to={`indicadores/${firstRoomId}`}
                className={inclusor("/sistema/indicadores")}
              >
                <CgShapeCircle size={"12px"} />
                Indicadores
              </LinkList>
            </Li>
            <Li>
              <LinkList
                to="estadisticas"
                className={inclusor("/sistema/estadisticas")}
              >
                <CgShapeCircle size={"12px"} />
                Estadísticas y tendencias
              </LinkList>
            </Li>
            <Li>
              <LinkList
                to="alertas"
                className={inclusor(`/sistema/alertas`)}
              >
                <CgShapeCircle size={"12px"} />
                Alertas
              </LinkList>
            </Li>
            {/* <Li>
              <LinkList
                to="auditoria"
                className={inclusor("/sistema/auditoria")}
              >
                <CgShapeCircle size={"12px"} />
                Auditoria
              </LinkList>
            </Li> */}
          </ListShow>
        </ContenedorLi>
      </ContenedorUl>
    </NavBar>
  );
};
