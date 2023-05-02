import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import usePromedios from '../hooks/usePromedios';

const HCHODate = () => {
  
  const { id } = useParams();

  const indicator = 'hcho'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
        <IndicadorApiContent
          //Tabla 
          title="HCHO" 
          apiUrl={`/sensors/api/sensor/indicators`}
          idRoom={id}
          indicator={indicator}
          campoTablaCo2={'HCHO'}
          valorCampoCo2={"hcho"}
          simboloCo2={"mg/m3"}
          estado={true}
          //Grafico
          DataMin={0}
          DataMax={2}
          DataKeyEjeX={"hcho"}
          rango1={0.101}
          rango2={0.501}
          rango3={2}
          rangoColor1={"#57d2a9"}
          rangoColor2={"#febc2d"}
          rangoColor3={"red"}
          //Filtracion
          indicadorURL={"hcho"}
          //Promedios
          done={value}
          porcentajeData={100}
          simbolo={"mg/m3"}
          estadoPromedio={status}
          //Modal
          modalMide={"hcho"}
        />
    </>
  )
}

export default HCHODate