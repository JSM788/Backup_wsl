import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ContainerAnimationPage } from "../animation/Animacion";
import HeaderFilter from "../components/HeaderFilter";
import NavIndicadores from "../components/NavIndicadores";
import useFilters from "../hooks/useFilters";
import { ContenedorIndicador, HeaderButton, MainIndicador } from "../styles/IndicadoresStyle";
import Estadistica from '../assets/svg/estadisticas1.svg'
import useMeasurables from "../hooks/useMeasurable";

const IndicadoresCo2 = () => {

  const { id } = useParams()

  const [filtros, setFiltros] = useState({
    sede: "",
    sala: id || null,
  })

  const { sede, sala } = filtros

  const { salas, sedes, currentRoom } = useFilters()

  const handleChange = (e) =>{
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const { measurables } = useMeasurables(sala)

  const afterSlash = location.pathname.split('/').pop()

  const salaProperties = salas?.find((e)=>e.id==sala)

  const pageChange = (id) =>{

    const url = `/sistema/indicadores/${id}`

    navigate(url)
  }

  return (
    <>
      <HeaderFilter
        filtros={filtros}
        handleChange={handleChange}
        salas={salas}
        sedes={sedes}
        currentRoom={currentRoom}
        pageChange={pageChange}
        noInitial
      >
        <HeaderButton
          onClick={()=>navigate(`/sistema/estadisticas/${id}`)}
        >
          <img src={Estadistica} width="16"/>
          Ver estadísticas
        </HeaderButton>
      </HeaderFilter>
    <ContainerAnimationPage>     
      <ContenedorIndicador>
        <NavIndicadores measurables={measurables}/>
      </ContenedorIndicador>
      <MainIndicador>
          <Outlet context={[sala, salaProperties, salas]}/>
      </MainIndicador>
    </ContainerAnimationPage>
    </>
)}

export default IndicadoresCo2;
