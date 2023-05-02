import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import { clienteAxiosValhalla } from '../config/axios';
import usePromedios from '../hooks/usePromedios';


const PresionBarametricaDate = () => {
  
  const { id } = useParams();

  const indicator = 'pressure'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="Presión barométrica" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={'Presión barométrica'}
        valorCampoCo2={"barometric_presion"}
        simboloCo2={"hPa"}
        estado={true}
        //Grafico
        DataMin={0}
        DataMax={3000}
        DataKeyEjeX={"barometric_presion"}
        rango1={760}
        rango2={1014}
        rango3={3001}
        rangoColor1={"#febc2d"}
        rangoColor2={"#57d2a9"}
        rangoColor3={"red"}
        //Filtracion
        indicadorURL={"presion"}
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"hPa"}
        estadoPromedio={status}
        //Modal
        modalMide={"presion"}
      />
    </>
  )
}

export default PresionBarametricaDate