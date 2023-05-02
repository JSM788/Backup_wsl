import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import usePromedios from '../hooks/usePromedios';


const OzonoDate = () => {
  
  const { id } = useParams();

  const indicator = 'ozone'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent
        //Tabla 
        title="Ozono" 
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={'Ozono'}
        valorCampoCo2={"ozono"}
        simboloCo2={"µg/m3"}
        estado={true}
        //Grafico
        DataMin={0}
        DataMax={300}
        DataKeyEjeX={"ozono"}
        rango1={121}
        rango2={181}
        rango3={301}
        rangoColor1={"#57d2a9"}
        rangoColor2={"#febc2d"}
        rangoColor3={"red"}
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"µg/m3"}
        estadoPromedio={status}
        //Modal
        modalMide={"ozono"}
      />
    </>
  )
}

export default OzonoDate