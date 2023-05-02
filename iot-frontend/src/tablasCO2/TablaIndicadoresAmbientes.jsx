import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { EnlaceTabla, EstadoTd, TablaEstadoColor, TablaIndicadoresImg } from '../styles/MonitoreoStyle';
import { TableStyle, Tbody, Td, Th, Thead, Tr } from '../styles/TablasStyle';
import Nube from '../assets/svg/nube.svg';
import Termometro from '../assets/svg/termometro.svg';
import Humedad from '../assets/svg/humedad.svg';
import PM from '../assets/svg/pm.svg';
import PM10 from '../assets/svg/PM10.svg';
import TVOC from '../assets/svg/tvoc.svg';
import HCHO from '../assets/svg/hcho.svg';
import Ozono from '../assets/svg/ozono.svg';
import PIR from '../assets/svg/pir.svg';
import { alertReturner } from '../utils/statusLogic';
import { pirReturner } from '../utils/pirLogic';

const TablaIndicadoresAmbientes = ({last}) => {

  const navigate = useNavigate();
  const { id } = useParams();

  const HandleClick = (indicador) => {
    navigate(`/sistema/indicadores/${id}${indicador && `/${indicador}`}`);
  }

  const valueChecker = (a) =>
    a || '-'

  return (
    <TableStyle>
    <Thead>
      <Tr>
        <Th>
          Estado
        </Th>
        <Th posicion="start">
          Indicadores
        </Th>
        <Th>
          Cantidad
        </Th>
        <Th>
          Más info
        </Th>
      </Tr>
    </Thead>
    <Tbody>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_carbon_dioxide).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={Nube} alt="icon" /> <div>CO<sub>2</sub></div>
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.carbon_dioxide)} ppm</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_pm2).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={PM} alt="icon" />PM2.5
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.pm2)} µg/m2</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("pm")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_pm10).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={PM10} alt="icon" />PM10
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.pm10)} µg/m2</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("pm10")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_tvoc).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
              <img src={TVOC} alt="icon" /> TVOC
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.tvoc)} </Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("tvoc")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_hcho).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={HCHO} alt="icon" />HCHO
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.hcho)} mg/m3</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("hcho")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color={alertReturner(last.status_ozone).color}></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={Ozono} alt="icon" />Ozono
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.ozone)} µg/m3</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("ozono")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color="white"></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={Termometro} alt="icon" />Temperatura
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.temperature)} C°</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("temperatura")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
                <EstadoTd color="white"></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
            <img src={Humedad} alt="icon" />Humedad
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {valueChecker(last?.humidity)} %</Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("humedad")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
        <Tr>
          <Td data-label="Estado"> 
            <TablaEstadoColor>
              <EstadoTd color="white"></EstadoTd>
            </TablaEstadoColor> 
          </Td>
          <Td data-label="Indicadores"> 
            <TablaIndicadoresImg>
              <img src={PIR} alt="icon" />PIR
            </TablaIndicadoresImg>
          </Td>
          <Td data-label="Cantidad"> {pirReturner(last?.pir)} </Td>
          <Td data-label="Más info"> 
              <EnlaceTabla onClick={()=>HandleClick("pir")}>
                <u>Ver detalle</u>
              </EnlaceTabla>
            </Td>
        </Tr>
      </Tbody>         
    </TableStyle>
  )
}

export default TablaIndicadoresAmbientes