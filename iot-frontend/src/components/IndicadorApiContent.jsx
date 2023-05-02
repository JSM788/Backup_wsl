import React, { useContext, useEffect, useState } from "react";
import FiltroIndicadores from "./FiltroIndicadores";
import {
  BoxIndicador,
  TablaCO2Container,
  TablasIndicadores,
} from "../styles/IndicadoresStyle";
import { clienteAxiosValhalla } from "../config/axios";
import HerramientasTabla from "./HerramientasTabla";
import Reutilizable from "../TablasIndicadores/Reutilizable";
import Promedios from "./Promedios";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";
import { download } from "../utils/downloadCsv"
import { useOutletContext } from "react-router-dom";
import StatisticsGraph from "./StatisticsGraph"
import useTimer from "../hooks/useTimer";

const IndicadorApiContent = ({
  title = null,
  indicator,
  idRoom,
  campoTablaCo2 = null,
  valorCampoCo2 = null,
  simboloCo2 = null,
  subValor = null,
  estado = null,
  DataMin = 0,
  DataMax = 1000,
  dangerLine='0',
  contaminatedLine='0',
  done = 0,
  simbolo = null,
  modalMide = null,
  estadoPromedio,
  //Estadistica show
  estadisticaShow,
  textoPIR
}) => {

  const [active, setActive] = useState('data')

  const { time, resetTimer } = useTimer()

  const [items, setItems] = useState([])
  const [counts, setCounts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(0)

  const { startDate, endDate } = useContext(FiltrosContext)

  const controller = new AbortController()

  const [ sala, salaProperties ] = useOutletContext()

  const { name: salaName, date_created: roomStartDate } = salaProperties || {}

  const apiUrl = `/sensors/api/sensor/indicators`

  useEffect(() => {
    getData()
    setPage(0)
    return ()=>{
      controller.abort()
    }
  },[idRoom, startDate, endDate])

  const getData = async (pagina = 1) => {

    setLoading(true);

    const url = `${apiUrl}?indicator=${indicator}&room=${idRoom}&page=${pagina}&range_date_after=${startDate}&range_date_before=${endDate}&status=${status}`

    const res = await clienteAxiosValhalla.get(url,{
      signal: controller.signal 
    });

    setLoading(false)
    setItems(res.data.results)
    setCounts(res.data.count)
    return res.data.results
  }

  const getDataResumen = async () => {
    const {data} = await clienteAxiosValhalla.get(`${apiUrl}/report?indicator=${indicator}&range_date_after=${startDate}&range_date_before=${endDate}&room=${idRoom}`, {
      signal: controller.signal 
    });
    download(data, indicator + ' ' + sala.replace('.',''))
  }

  const handlePageClick = async (data) => {
    setPage(data.selected)
    getData(data.selected+1)
  }

  const reload = () => {
    getData()
    resetTimer()
  }

  const filter = () =>{
    getData()
    setPage(0)
  }

  const totalDePaginas = Math.ceil(counts / 10)

  return (
    <>
      {items && (
        <>
          <BoxIndicador>
            <FiltroIndicadores
              startDate={startDate}
              endDate={endDate}              
              setStatus={setStatus}
              indicator={indicator}
              status={status}
              filter={filter}
              salaName={salaName}
              roomStartDate={roomStartDate}     
            />
            <Promedios
              title={title}
              done={done}
              estadoPromedio={estadoPromedio}
              diff={time}
              simbolo={simbolo}
              modalMide={modalMide}
              textoPIR = {textoPIR}
            />
          </BoxIndicador>
          <TablasIndicadores>
            <TablaCO2Container>
              <HerramientasTabla
                title={title}
                modalMide={modalMide}
                active={active}
                setActive={setActive}
                reload={reload}
                estadisticaShow={estadisticaShow}
                getReporte={getDataResumen}
              />
              {active==='data' ? (
                <Reutilizable
                  campoTablaCo2={campoTablaCo2}
                  valorCampoCo2={valorCampoCo2}
                  simboloCo2={simboloCo2}
                  subValor={subValor}
                  estado={estado}
                  items={items}
                  page={page}
                  loading={loading}
                  totalDePaginas={totalDePaginas}
                  counts={counts}
                  handlePageClick={handlePageClick}
                />
              ) : (
                <StatisticsGraph
                  items={items.slice('').reverse()}
                  name={title}
                  DataKeyEjeX={valorCampoCo2}
                  dangerLine={dangerLine}
                  contaminatedLine={contaminatedLine}
                  DataMin={DataMin}
                  DataMax={DataMax}
                />
              )}
            </TablaCO2Container>
          </TablasIndicadores>
        </>
      )}
    </>
  );
};

export default IndicadorApiContent;
