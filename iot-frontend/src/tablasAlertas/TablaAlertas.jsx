import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { Loading } from "../components/Loading"
import { NoData } from "../components/NoData"
import { BsArrowClockwise } from "react-icons/bs"
import {
  BtnActualizar,
  CantidadResultados,
  PaginacionBox,
  PaginacionContainer,
  TableStyle,
  Tbody,
  Td,
  Th,
  Thead,
  TooltipActualizar,
  Tr,
} from "../styles/TablasStyle"
import { AnimationDetallesTablas } from "../animation/Animacion"
import { AnimatePresence } from "framer-motion"
import { CommentButton, Icon, IconLabel, InvisibleCheckbox, ReportFlex, Slider, Switcher, TableContainer, UpdateBox } from "../styles/AlertasStyle"
import EmojiAmarillo from '../assets/svg/emojiAmarillo.svg'
import EmojiRojo from '../assets/svg/emojiRojo.svg'
import ModalComentario from "./ModalComentario"
import { Reporte } from "../styles/IndicadoresStyle"
import FilterMenu from "../components/FilterMenu"
import useComponentVisible from "../hooks/useVisibility"
import ExcelImg from "../assets/svg/excel.svg"

const Indicators ={
  CO2:{
    main: 'CO',
    sub: '2',
    unit: 'ppm',
  },
  PM2:{
    main: 'PM',
    sub: '2.5',
    unit: 'µg/m',
    subunit: '2',
  },
  PM10:{
    main: 'PM',
    sub: '10',
    unit: 'µg/m',
    subunit: '2',
  },
  TVOC:{
    main: 'TVOC',
  },
  HCHO:{
    main: 'HCHO',
    unit: 'mg/m',
    subunit: '3',
  },
  OZONO:{
    main: 'Ozono',
    unit:'µg/m',
    subunit: '3',
  }
}

const TablaAlertas = ({
  valorCampoParametro = "",
  items,
  loading,
  getReport,
  ActualizarData,
  counts,
  page,
  handlePageClick,
  perPage,
  solved,
  solvedSetter
}) => {
  const pageTotal = Math.ceil(counts/perPage) || 1
  const thisParam = Indicators[valorCampoParametro]
  const [ modalShow, setModalShow ] = useState(false)
  const [ selectedId, setSelectedId] = useState(0)
  const [ hasComments, setHasComments] = useState(0)

  const handleModal = (item) =>{
    setSelectedId(item.id)
    setHasComments(item.number_comments)
    setModalShow(true)
  }

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <AnimationDetallesTablas>
      <TableContainer>
        <ReportFlex>
          <Reporte pad mid ref={ref} onClick={()=>setIsComponentVisible(true)}>
            <img src={ExcelImg} alt="icon" />
            &nbsp;Reporte
            {isComponentVisible && <FilterMenu getReport={getReport}/>}
          </Reporte>
        </ReportFlex>
        { modalShow && (
          <ModalComentario
            id={selectedId} 
            close={()=>setModalShow(false)}
            reload={ActualizarData}
            solved={hasComments>0 || solved}/>
          )}
        {!loading ? (
          <>
            <AnimatePresence>
              <TableStyle>
                <Thead>
                  <Tr>
                    <Th>Fecha</Th>
                    <Th>Sala</Th>
                    <Th>Hora</Th>               
                    <Th sub={(thisParam.sub || thisParam.subunit) ? true : false }>
                      {thisParam.main}
                      {thisParam.sub ? <sub>{thisParam.sub}</sub> : null}
                      {thisParam.unit && 
                        <>
                          ({thisParam.unit}
                          {thisParam.subunit ? 
                            <sub style={{'verticalAlign': 'sub'}}>
                              {thisParam.subunit}
                            </sub> 
                          : null })
                        </>
                      }
                    </Th>                                                           
                    <Th>Estado</Th>
                    <Th>Solución</Th>
                    <Th>Resuelto</Th>
                  </Tr>
                </Thead>
                <Tbody
                  layout
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                {items.map((item) => {
                  return (                    
                      <Tr 
                        key={item.id}
                        actualizar="actualizar"
                      >
                        <Td> {new Date(item.created_at).toLocaleDateString('en-GB') || "Horas"} 
                        </Td>             
                        <Td> {item.device.local.name} </Td>
                        <Td> {new Date(item.created_at).toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                          }). toLocaleLowerCase() || "Horas"} 
                        </Td>
                        <Td>
                          {item.value} {thisParam.unit}
                          {thisParam.subunit ? <sub>{thisParam.subunit}</sub> : null} 
                        </Td>
                        {
                          item.level==='HIGH' && (
                            <Td status>
                              <Icon src={EmojiRojo}/>
                              <IconLabel>Malo</IconLabel>
                            </Td>
                          )
                        }
                        {
                          item.level==='NORMAL' && (
                            <Td status>
                              <Icon src={EmojiAmarillo}/>
                              <IconLabel>Regular</IconLabel>                             
                            </Td>
                          )
                        }
                        <Td>
                          <CommentButton onClick={()=>handleModal(item)}>
                            { item.number_comments==0 && !solved ? 'Añadir comentario' : 'Visualizar comentario'}
                          </CommentButton>
                        </Td>
                        <Td>
                          <Switcher 
                            onClick={()=>solvedSetter(item.id, !item.resolved)}>
                            <InvisibleCheckbox defaultChecked={item.resolved}/>
                            <Slider/>
                          </Switcher>
                        </Td>
                      </Tr>                    
                  );
                })}
                </Tbody>
              </TableStyle>
              {counts === 0 ? <NoData key="nodata" /> : null}
            </AnimatePresence>
          </>) : (
          <Loading />
        )}      
        <PaginacionContainer detalles="tabla">
          <CantidadResultados>
            { loading || counts === 0 ? (
              <h3>"----"</h3>
            ) : (
              <h3>
                Mostrando {items.length} de {counts} resultados{" "}
              </h3>
            )}
          </CantidadResultados>
          <PaginacionBox>
            <ReactPaginate
              previousLabel={<i className="fas fa-angle-left"></i>}
              nextLabel={<i className="fas fa-angle-right"></i>}
              breakLabel={"..."}
              pageCount={pageTotal}
              marginPagesDisplayed={2}
              // pageRangeDisplayed={6}
              onPageChange={handlePageClick}
              forcePage={page}
              containerClassName={"pagination"}
              previousClassName={"anterior"}
              nextClassName={"siguiente"}
              activeLinkClassName={"activePaginacionFondo"}
              activeClassName={"activePaginacionFondo"}
            />
          </PaginacionBox>
        </PaginacionContainer>
      </TableContainer>
    </AnimationDetallesTablas>
  );
};

export default TablaAlertas