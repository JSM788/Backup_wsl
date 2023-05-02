import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import { clienteAxiosValhalla } from '../config/axios';
import usePromedios from '../hooks/usePromedios';

const PMDate = () => {
  
  const { id } = useParams()

  const indicator = 'pm2'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="PM2.5" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={'PM2.5'}
        valorCampoCo2={"pm2"}
        simboloCo2={"µg/m3"}
        estado={true}
        //Grafico
        DataMin={8}
        DataMax={100}
        DataKeyEjeX={"pm2"}
        dangerLine={'150.4'}
        contaminatedLine={'35.4'}
        //Filtracion
        indicadorURL={"pm"}
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"µg/m2"}
        estadoPromedio={status}
        //Modal
        modalMide={"pm"}
      />
    </>
  )
}

export default PMDate