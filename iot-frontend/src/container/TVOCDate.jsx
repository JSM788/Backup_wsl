import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import usePromedios from '../hooks/usePromedios';


const TVOCDate = () => {

  const { id } = useParams();

  const indicator = 'tvoc'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="TVOC" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={'TVOC'}
        valorCampoCo2={"tvoc"}
        simboloCo2={""}
        estado={true}
        //Grafico
        DataMin={0}
        DataMax={400}
        DataKeyEjeX={"tvoc"}
        rango1={101}
        rango2={201}
        rango3={401}
        rangoColor1={"#57d2a9"}
        rangoColor2={"#febc2d"}
        rangoColor3={"red"}
        //Filtracion
        indicadorURL={"tvoc"}
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"-"}
        estadoPromedio={status}
        //Modal
        modalMide={"tvoc"}
      />
    </>
  )
}

export default TVOCDate