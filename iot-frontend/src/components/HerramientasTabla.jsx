import React from "react";
import ExcelImg from "../assets/svg/excel.svg";
import ListaImgSelect from "../assets/svg/listaApiSelect.svg";
import ListaImg from "../assets/svg/listaApi.svg";
import EstadisticaImgSelect from "../assets/svg/estadisticaSelect.svg";
import EstadisticaImg from "../assets/svg/estadisticas.svg";

import { CSVLink } from "react-csv";

import {
  DetallesIndicadores,
  Herramientas,
  Reporte,
  BoxChange,
  CSVStyledLink
} from "../styles/IndicadoresStyle";
import { BoxActualizar, BtnActualizar, TooltipActualizar } from "../styles/TablasStyle";
import { BsArrowClockwise } from "react-icons/bs";

const HerramientasTabla = ({
  title="",
  modalMide,
  itemsReporte,
  active,
  setActive,
  reload,
  getReporte,
  estadisticaShow = true,
}) => {
  return (
    <DetallesIndicadores>
      <h2>Niveles de {title}</h2>
      <Herramientas>
        <Reporte 
          dark
          heightfull
          onClick={()=>getReporte()}
        >          
          <img src={ExcelImg} alt="icon" />
          &nbsp;Reporte
        </Reporte>       
        {modalMide === "pir" ? (
          <BoxChange activadoApi={active==='data'}>
            <img src={ListaImgSelect} alt="icon" />
            &nbsp;Datos
          </BoxChange>
        ) : (
          <BoxChange activadoApi={active==='data'} onClick={()=>setActive('data')}>
            {active==='data' ? (
              <img src={ListaImgSelect} alt="icon" />
            ) : (
              <img src={ListaImg} alt="icon" />
            )}
            &nbsp;Datos
          </BoxChange>
        )}
        {estadisticaShow && (
          <BoxChange
            activadoApi={active==='stats'}
            onClick={()=>setActive('stats')}
          >
            {active==='stats' ? (
              <img src={EstadisticaImgSelect} alt="icon" />
            ) : (
              <img src={EstadisticaImg} alt="icon" />
            )}
            &nbsp;Estadisticas
          </BoxChange>
        )}
        <BtnActualizar onClick={()=>reload()}>
            <BsArrowClockwise size={22}/> Actualizar
        </BtnActualizar>
      </Herramientas>
    </DetallesIndicadores>
  );
};

export default HerramientasTabla;
