import React, { useContext, useEffect, useState } from "react";
import { ContainerAnimationPage } from "../animation/Animacion";
import { DisplayToggle, Herramientas, Reporte } from "../styles/IndicadoresStyle";
import {
  BoxSelectAmbiente,
  ContenedorMonitoreo,
  ContenedorMonitoreoAmbiente,
  DisplayContenedor,
  SelectIndicadorAmbiente,
  UpdateBox,
  AmbienteEstadisticas,
  BoxGrafica
} from "../styles/MonitoreoStyle";
import { ContenedorModulo, Opciones, TitlePage } from "../styles/Usables";
import ExcelImg from "../assets/svg/excel.svg";
import Display from "../assets/svg/Display.svg";
import DisplayPageAmbiente from "./DisplayPageAmbiente";
import NavMonitoreo from "../components/NavMonitoreo";
import { generatePath, Navigate, Outlet, useLocation, useMatch, useNavigate, useParams, useRoutes } from "react-router-dom";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";
import { AuthContext } from "../context/auth/AuthProvider";
import { clienteAxiosValhalla } from "../config/axios";
import useFilters from "../hooks/useFilters";
import { returner } from "../utils/statusLogic";
import { download } from "../utils/downloadCsv";
import useMonitoring from "../hooks/useMonitoring";
import MonitoreoLeftCard from "../components/MonitoreoLeftCard";
import useMeasurables from "../hooks/useMeasurable";

const MonitoreoAmbiente = () => {

  const {FiltrarIndicadoresReset} = useContext(FiltrosContext);

  const { id } = useParams()

  const [filtros, setFiltros] = useState({
    sede: "",
    sala: id
  });

  const [diff, setDiff] = useState(0);
  const [display, setDisplay] = useState(false);

  const { sede, sala } = filtros;

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    })
  }

  const timeHoy = new Date();
  const today = timeHoy.toLocaleDateString('en-CA')

  const location = useLocation()

  const afterSlash = location.pathname.split('/').pop()
  
  const { sedes, salas, getSalas, currentRoom } = useFilters()
  
  const { data, roomStatus } = useMonitoring(sala, afterSlash)

  const { measurables } = useMeasurables(sala)

  const navigate = useNavigate()

  const getReport = async () =>{
    const {data} = await clienteAxiosValhalla.get(`sensors/api/room/report?room=${sala}&date=${today}`)
    download(data, `Reporte sala ${roomStatus.room}`.replace('.',''))
  }

  const pageChange = (id) =>{
    // if(Number.isNaN(parseInt(afterSlash))){
    //   navigate(`/sistema/monitoreoAmbiental/${id}/${afterSlash}`)
    // }
    // else 
    navigate(`/sistema/monitoreoAmbiental/${id}`)
  }

  return (
    <ContainerAnimationPage>     
    {
      !display ? (
      <ContenedorMonitoreoAmbiente>
        <ContenedorModulo>
          <Opciones>
            <h2>Filtros:</h2>
            <BoxSelectAmbiente>
              <SelectIndicadorAmbiente
                monitoreo="196px"
                name="sede"
                id="sede"
                value={sede}
                onChange={(e)=>{
                    handleChange(e)
                    getSalas(e.target.value)              
                }}
              >
                <option value="">Todas las sedes</option>
                {sedes.map((sedeF) => {
                    return (
                      <option  key={sedeF.name} value={sedeF.id}>
                        {sedeF.name}
                      </option>
                    );
                  })}
              </SelectIndicadorAmbiente>
            </BoxSelectAmbiente>
            <BoxSelectAmbiente>
              <SelectIndicadorAmbiente
                monitoreo="230px"
                name="sala"
                id="sala"
                value={sala}
                onChange={(e)=>{
                  if(e.target.value !== ""){
                    handleChange(e)
                    pageChange(e.target.value)
                  }       
                }}
              >
                <option value="">Todas las salas</option>
                {salas.length===0 && (<option value="">Seleccionar sala</option>)}
                {salas.map((salasF) => {
                    return (
                      <option  key={salasF.name} value={salasF.id}>
                        {salasF.name}
                      </option>
                    );
                  })}
              </SelectIndicadorAmbiente>
            </BoxSelectAmbiente>
            <Reporte
              onClick={()=>getReport()}
            >
              <img src={ExcelImg} alt="icon" />
              &nbsp;Reporte
            </Reporte>
            <DisplayToggle onClick={()=>setDisplay(prev=>!prev)}>
              <img src={Display} alt="icon" />
              &nbsp;&nbsp;&nbsp;Modo Display
            </DisplayToggle>
          </Opciones>
        </ContenedorModulo>
        <br />
        <ContenedorMonitoreo>
          <MonitoreoLeftCard data={roomStatus}/>
          {
            currentRoom?.device_assigned ? (
              <AmbienteEstadisticas>
                <NavMonitoreo measurables={measurables}/>
                  <BoxGrafica>
                    <UpdateBox>
                      <h3>Estadísticas</h3>
                      <p>En tiempo real</p>               
                    </UpdateBox>
                    <Outlet context={[data]}/>
                  </BoxGrafica>          
              </AmbienteEstadisticas>
            ):(
              <AmbienteEstadisticas>
                <p>No hay data</p>
              </AmbienteEstadisticas>
            )
          } 
        </ContenedorMonitoreo>
      </ContenedorMonitoreoAmbiente>
          ) : (
            <DisplayContenedor>
              <DisplayPageAmbiente
                diff={diff} 
                setDiff={setDiff} 
                CambiarPage={()=>setDisplay(prev=>!prev)} 
                roomStatus={roomStatus} 
              />
            </DisplayContenedor>
          )
        }
    </ContainerAnimationPage>
  );
};

export default MonitoreoAmbiente;
