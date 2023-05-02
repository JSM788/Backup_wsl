import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import usePromedios from '../hooks/usePromedios';

const PM10Date = () => {
  
  const { id } = useParams();

  const indicator = 'pm10'

  const { value, status } = usePromedios(id, indicator)
  
  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="PM10" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={'PM10'}
        valorCampoCo2={"pm10"}
        simboloCo2={"µg/m3"}
        estado={true}
        //Grafico
        DataMin={0}
        DataMax={50}
        DataKeyEjeX={"pm10"}
        rango1={21}
        rango2={26}
        rango3={51}
        rangoColor1={"#57d2a9"}
        rangoColor2={"#febc2d"}
        rangoColor3={"red"}
        //Filtracion
        indicadorURL={"pm10"}
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"µg/m2"}
        estadoPromedio={status}
        //Modal
        modalMide={"pm10"}
      />
    </>
  )
}

export default PM10Date;