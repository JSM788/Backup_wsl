import { ContainerAnimationPage } from "../../animation/Animacion" 
import React, { useEffect, useState } from 'react'
import { ContenedorAlertas, ContenedorModulo, TitlePage } from "../../styles/Usables"
import { BoxGrafica, ContenedorMonitoreo, ResumenAmbiente, UpdateBox } from "../../styles/MonitoreoStyle"
import TablaAlertas from "../../tablasAlertas/TablaAlertas"
import { AlertCounter, ChangePageButton, FlexHeader, HeadDivider, LeftTitle, NumeroAlertas, ResumenAlertas, RightTitle, StyledInput, UnsolvedCases, UpdateButton } from "../../styles/AlertasStyle"
import NavAlertas from "../../components/NavAlertas"
import { BsArrowClockwise, BsArrowRight, BsArrowRightShort } from "react-icons/bs"
import { Herramientas, Reporte } from "../../styles/IndicadoresStyle"

import useAlerts from "../../hooks/useAlerts"
import useComponentVisible from "../../hooks/useVisibility"
import FilterMenu from "../../components/FilterMenu"
import { today } from "../../utils/todayFilter"
import useFilters from "../../hooks/useFilters"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import useMeasurables from "../../hooks/useMeasurable"

const Alertas = () => {

  const [selected, setSelected] = useState('CO2')
  const [offset, setOffset] = useState(0)
  
  // const [startDate, setStartDate] = useState(today)
  // const [finishDate, setFinishDate] = useState(today)
  const [firstTime, setFirstTime] = useState(true)
  const [page, setPage] = useState(0)

  const [ fecha, option ] = useOutletContext()

  const { 
    alerts, 
    count, 
    loading,
    globalCount,
    getData,
    setSolved,
    getReport,
    AlertsPerPage
  } = useAlerts(selected, offset, fecha, option, firstTime)

  const { id } = useParams()

  const { measurables } = useMeasurables(id)

  useEffect(()=>{
    setSelected('CO2')
  },[id])

  useEffect(()=>{
    setOffset(0)
    setPage(0)
  },[fecha])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * AlertsPerPage) % count;

    setOffset(newOffset);
    setPage(event.selected)
  };

  return (
    <ContainerAnimationPage>
      <ContenedorAlertas>
        <FlexHeader>
          {/* <StyledInput
            type="date"
            name="startDate"
            min={'2022-09-23'}
            max={finishDate}
            value={startDate}
            onKeyDown={(e) => e.preventDefault()}
            onChange={(e)=>{
              setFirstTime(false)
              setStartDate(e.target.value)              
            }}
          />
          <StyledInput
            type="date"
            name="finishDate"
            min={startDate}
            max={today}
            value={finishDate}
            onKeyDown={(e) => e.preventDefault()}
            onChange={(e)=>{
              setFirstTime(false)
              setFinishDate(e.target.value)              
            }}
          />
          <UpdateButton onClick={()=>getData(firstTime)}>
            <BsArrowClockwise size={"24px"}/>
            Actualizar
          </UpdateButton> */}
          
          {/* <ChangePageButton to="/sistema/resueltas">
            Casos Resueltos
            <BsArrowRightShort fontSize={'26px'}/>
          </ChangePageButton> */}
          <NavAlertas
            measurables={measurables}
            selected={selected}
            setSelected={setSelected}
            setOffset={setOffset}
          />
        </FlexHeader>
        <ContenedorMonitoreo>
          {/* <ResumenAlertas>
            <HeadDivider>
              <LeftTitle>
                  <i className="fas fa-bell" aria-hidden="true"></i>&nbsp;&nbsp;Total de casos</LeftTitle>
              <RightTitle>
                {globalCount}
              </RightTitle>
            </HeadDivider>
            <AlertCounter
              display="alerta"
              colorsi1="#57B8FF"
            >
              <NumeroAlertas>{count}</NumeroAlertas>
            </AlertCounter>
            <UnsolvedCases>Casos sin resolver</UnsolvedCases>
            <NavAlertas 
              selected={selected} 
              setSelected={setSelected} 
              setOffset={setOffset}
            />
          </ResumenAlertas> */}
          <BoxGrafica>            
            <TablaAlertas
              items={alerts}
              loading={loading}
              getReport={getReport}
              ActualizarData={getData}
              counts={count}
              page={page}
              perPage={AlertsPerPage}
              valorCampoParametro={selected}
              handlePageClick={handlePageClick}
              solvedSetter={setSolved}
            />
          </BoxGrafica>
        </ContenedorMonitoreo>
      </ContenedorAlertas>
    </ContainerAnimationPage>
  )
}

export default Alertas