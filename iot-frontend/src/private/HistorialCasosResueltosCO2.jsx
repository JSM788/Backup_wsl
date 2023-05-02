import React, {useContext} from 'react';
import { useLocation, Outlet } from "react-router-dom";
import { EmpresaContext } from '../context/empresa/EmpresaProvider';

import { BoxCasos, ContenedorModulo, ContenedorUrgencias, LinkBox, LinkContenedor, NameCasos, NumeroCasos, TablaContenedor, TitlePage } from "../styles/Usables";


export const HistorialCasosResueltosCO2 = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  const {countCo2Atencion} = useContext(EmpresaContext);
  return (
      <>
        <ContenedorModulo>
          <ContenedorUrgencias>
            <TitlePage tabla="tabla">
              <h1>Historial</h1>
              <h4>CASOS RESUELTOS</h4>
            </TitlePage>
            <BoxCasos>
              <NumeroCasos>
                <span>{countCo2Atencion}</span>
              </NumeroCasos>
              <NameCasos>
                <h4>CASOS</h4>
                <h4>RESUELTOS</h4>
              </NameCasos>
            </BoxCasos>
          </ContenedorUrgencias>
          {/* <div className="distanciamiento__fecha--urgencia__historial">
            <button>
              <i className="fas fa-calendar-week"></i>&nbsp;&nbsp;Fecha
            </button>
            <button>
              <i className="fas fa-calendar-week"></i>&nbsp;&nbsp;Hoy
            </button>
          </div> */}
        </ContenedorModulo>
        <LinkContenedor>
          <LinkBox
              to=""
              className={`${
                urlActual === "/dashboard/historialCasosCo2"
                ? "urlActual"
                : null
              }`}
            >
              Niveles de CO<sub>2</sub>
            </LinkBox>
        </LinkContenedor>
          
        <TablaContenedor>
          <Outlet />
        </TablaContenedor>
      </>
  )
}
