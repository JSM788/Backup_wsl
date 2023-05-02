import React, { useContext, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthProvider";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";
import {
  BoxSelect,
  FiltrosBox,
  FormFiltro,
  GridIndice,
  InputSubmit,
  SelectIndicador,
  TimeBox,
} from "../styles/IndicadoresStyle";
import { optionArray } from '../utils/optionReturner'
import { today } from "../utils/todayFilter";

const FiltroIndicadores = ({
  startDate,
  endDate,
  indicator,
  status,
  setStatus,
  filter,
  salaName,
  roomStartDate
}) => {

  const {
    FiltrarIndicadoresFecha,
  } = useContext(FiltrosContext)

  const [filtros, setFiltros] = useState({
    // sede: "",
    // ambiente: "",
    // salas: "",
    estado: "",
    fechaInicio: startDate,
    fechaFinal: endDate
  })
  
  const { fechaInicio, fechaFinal } = filtros

  const handleChange = (e) => {
    console.log(filtros)
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    FiltrarIndicadoresFecha({
      startDate: fechaInicio,
      endDate: fechaFinal
    })
    filter()
  }

  return (
    <>
      <FiltrosBox>
        <h3>{salaName}</h3>
        {/* <p>
          Últimos 30 días
        </p> */}
        <br />
        <FormFiltro>
          <TimeBox>
            <input
              type="date"
              name="fechaInicio"
              onKeyDown={(e) => e.preventDefault()}
              min={roomStartDate || '2022-09-23'}
              max={fechaFinal}
              value={fechaInicio}
              onChange={handleChange}
            />
            <input 
              type="date" 
              name="fechaFinal"
              onKeyDown={(e) => e.preventDefault()}
              min={fechaInicio}
              max={today}
              value={fechaFinal} 
              onChange={handleChange} />
            {/* <input
              type="time"
              name="hora"
              id="hora"
              value={hora}
              onChange={handleChange}
            /> */}
          </TimeBox>
          <GridIndice>
            {/* <BoxSelect>
              <SelectIndicador
                name="sede"
                id="sede"
                value={sede}
                onChange={handleChange}
                onClick={(e)=>SedesCall(e.target.value)}
              >
                <option value="">Sede</option>
                {SedesFiltro.map((sedeF) => {
                    return (
                      <option  key={sedeF.name} value={sedeF.id}>
                        {sedeF.name}
                      </option>
                    );
                  })}
              </SelectIndicador>
            </BoxSelect>
            <BoxSelect>
              <SelectIndicador
                name="ambiente"
                id="ambiente"
                value={ambiente}
                onChange={handleChange}
                onClick={(e)=> AmbientesCall(e.target.value) }
              >
                <option value="">Ambiente</option>
                {AmbienteFiltro.length===0 && (<option value="">Seleccionar Sede</option>)}
                {AmbienteFiltro.map((ambienteF) => {
                    return (
                      <option  key={ambienteF.name} value={ambienteF.id}>
                        {ambienteF.name}
                      </option>
                    );
                  })}
              </SelectIndicador>
            </BoxSelect>
            <BoxSelect>
              <SelectIndicador
                name="salas"
                id="salas"
                value={salas}
                onChange={handleChange}
              >
                <option value="">Sala</option>
                {SalasFiltro.map((salasF) => {
                    return (
                      <option  key={salasF.id} value={salasF.id}>
                        {salasF.name}
                      </option>
                    );
                  })}
              </SelectIndicador>
            </BoxSelect> */}
            <BoxSelect>
              <SelectIndicador
                name="estado"
                id="estado"
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
              >
                <option value="">Estado</option>
                {
                  (indicator==='temperature' ||
                  indicator==='humidity' ||
                  indicator==='pir') ?
                  optionArray(indicator).map(elem=>(
                    <option value={elem.value}>{elem.content}</option>
                  )) :
                  <>
                    <option value="LOW">Bueno</option>
                    <option value="NORMAL">Regular</option>
                    <option value="HIGH">Malo</option>
                  </>
                }
                
              </SelectIndicador>
            </BoxSelect>
            <InputSubmit type="submit" value="Filtrar Datos" onClick={handleSubmit} />
          </GridIndice>
        </FormFiltro>
      </FiltrosBox>
    </>
  );
};

export default FiltroIndicadores;
