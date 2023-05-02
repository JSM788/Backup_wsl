import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import SVGVerde from '../assets/svg/emojiVerde.svg'
import SVGRojo from '../assets/svg/emojiRojo.svg'
import styled from 'styled-components';
import { clienteAxiosValhalla } from '../config/axios';
import usePromedios from '../hooks/usePromedios';

const IMG = styled.img`
  width: 90px;
  display: flex;
`

const PIRDate = () => {
  const { id } = useParams();
  const [doneApi, setDoneApi] = useState(true);
  const [estadoText, setEstadoText] = useState(null);

  const indicator = 'pir'

  const { value, status } = usePromedios(id, indicator)

  useEffect(() => {
    if (status===0) {
      setEstadoText('Ocupado')
      setDoneApi(true)
    }
    else{
      setEstadoText('Desocupado')
      setDoneApi(false);
    }
  }, []);

  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="PIR" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={"PIR"}
        valorCampoCo2={"pir"}
        simboloCo2={null}
        estado={false}
        //Grafico
        DataMin={0}
        DataMax={100}
        DataKeyEjeX={"pir"}
        rango1={101}
        rango2={201}
        rango3={401}
        rangoColor1={doneApi ? "#57d2a9" : "#f30b0b"}
        // rangoColor1={"#f30b0b"}
        rangoColor2={"#febc2d"}
        rangoColor3={"red"}
        //Filtracion
        indicadorURL={"pir"}
        //Promedios
        done={doneApi ? <IMG src={SVGVerde} alt="icon" /> : <IMG src={SVGRojo} alt="icon" />}
        porcentajeData={100}
        simbolo={null}
        estadoPromedio={status}
        //Modal
        modalMide={"pir"}
        //Ocultar
        estadisticaShow={false}
        //Extra
        textoPIR={estadoText}
      />
    </>
  )
}

export default PIRDate