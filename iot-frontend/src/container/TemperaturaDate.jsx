import IndicadorApiContent from '../components/IndicadorApiContent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clienteAxiosValhalla } from '../config/axios';
import usePromedios from '../hooks/usePromedios';

const TemperaturaDate = () => {
  
  const { id } = useParams();

  const indicator = 'temperature'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent 
        title="Temperatura" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={"Temperatura"}
        valorCampoCo2={"temperature"}
        simboloCo2={"C°"}
        estado={true}
        DataMin={0}
        DataMax={50}
        DataKeyEjeX={"temperature"}
        rango1={21}
        rango2={36}
        rango3={51}
        rangoColor1={"#febc2d"}
        rangoColor2={"#57d2a9"}
        rangoColor3={"red"}
        indicadorURL={"temperatura"}
        done={value}
        porcentajeData={100}
        simbolo={"C°"}
        estadoPromedio={status}
        //Modal
        modalMide={"temperatura"}
      />
    </>
  )
}

export default TemperaturaDate