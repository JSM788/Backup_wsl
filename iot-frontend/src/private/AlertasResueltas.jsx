import { ContainerAnimationPage } from "../animation/Animacion" 
import React, { useEffect } from 'react'
import { ContenedorAlertas, ContenedorModulo, TitlePage } from "../styles/Usables"
import { BoxGrafica, ContenedorMonitoreo, ResumenAmbiente } from "../styles/MonitoreoStyle"
import { useState } from "react"
import { AlertCounter, ChangePageButton, CSVStyledLink, FlexHeader, HeadDivider, LeftTitle, NumeroAlertas, ResumenAlertas, RightTitle, StyledInput, UnsolvedCases, UpdateButton } from "../styles/AlertasStyle"
import NavAlertas from "../components/NavAlertas"
import useAlerts from "../hooks/useAlerts"
import TablaAlertas from "../tablasAlertas/TablaAlertas"
import { Reporte } from "../styles/IndicadoresStyle"
import ExcelImg from "../assets/svg/excel.svg";
import { BsArrowClockwise, BsArrowRightShort } from "react-icons/bs"
import { today } from "../utils/todayFilter"

const AlertasResueltas = () => {

  const [selected, setSelected] = useState('CO2')
  const [offset, setOffset] = useState(0)
  
  const [startDate, setStartDate] = useState(today)
  const [finishDate, setFinishDate] = useState(today)
  const [firstTime, setFirstTime] = useState(true)

  const { 
    alerts, 
    count, 
    loading,
    controller,
    globalCount,
    getData, 
    setSolved, 
    AlertsPerPage 
  } = useAlerts(selected, offset, startDate, finishDate, firstTime, true)

  const processedAlerts = alerts.map((alert)=>(
    {
      id: alert.id,
      created_at: alert.created_at,
      value: alert.value,
      indicator: alert.indicator,
      level: alert.level,
      device: alert.device.name,
      room: alert.device.local.name
    }
  ))

  console.log(processedAlerts)

  // const onlyExcelData = [
  //   ...[alerts.device.id], 
  //   ...[alerts.device.local.name],
  //   ...[alerts.id],
  //   ...[alerts.indicator],
  //   ...[alerts.level],
  //   ...[alerts.value]
  // ]

  const handlePageClick = (event) => {
    const newOffset = (event.selected * AlertsPerPage) % count;

    setOffset(newOffset);
  };

  useEffect(()=>{
    getData(firstTime)
    return ()=>{
      controller.abort()
    }
  },[startDate, finishDate, selected, offset])

  return (
    <ContainerAnimationPage>
      <ContenedorAlertas>
        <FlexHeader>
        <StyledInput
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
          <CSVStyledLink
            data={processedAlerts}
            filename={`ReporteMonitoreo${today}`}
            uFEFF={false}
          >
            <Reporte dark>
              <img src={ExcelImg} alt="icon" />
              &nbsp;Reporte
            </Reporte>
          </CSVStyledLink>               
          <UpdateButton onClick={()=>getData()}>
            <BsArrowClockwise size={"24px"}/>
            Actualizar
          </UpdateButton>
        </FlexHeader>
        <ContenedorMonitoreo>
          <ResumenAlertas>
            <HeadDivider>
              <LeftTitle>
                  <i className="fas fa-bell" aria-hidden="true"></i>&nbsp;&nbsp;Total de casos</LeftTitle>
              <RightTitle>
                {globalCount}
              </RightTitle>
            </HeadDivider>
            <AlertCounter
              display="alerta"
              colorsi1="#57D2A9"
            >
              <NumeroAlertas solved>{count}</NumeroAlertas>
            </AlertCounter>
            <UnsolvedCases solved>Casos resueltos</UnsolvedCases>
            <NavAlertas 
              selected={selected} 
              setSelected={setSelected} 
              setOffset={setOffset}
            />
          </ResumenAlertas>
          <BoxGrafica>
            <TablaAlertas
              solved
              items={alerts}
              loading={loading}
              ActualizarData={getData}
              counts={count}
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

export default AlertasResueltas