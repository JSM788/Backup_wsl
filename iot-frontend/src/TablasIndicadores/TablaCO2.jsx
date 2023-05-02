import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import HerramientasTabla from '../components/HerramientasTabla'
import { TablaCO2Container } from '../styles/IndicadoresStyle';
import Reutilizable  from './Reutilizable';

const TablaCO2 = () => {
  const { id } = useParams();
  const [listaActiva, setListaActiva] = useState(true);
  const [estadisticaBtn, setEstadisticaBtn] = useState(false);

  return (
    <TablaCO2Container>
      <HerramientasTabla listaActiva={listaActiva} setListaActiva={setListaActiva} 
                  estadisticaBtn={estadisticaBtn} setEstadisticaBtn={setEstadisticaBtn} />
    
      {
        listaActiva && (
          <Reutilizable apiUrl = {`/sensors/api/sensor/${id}/dioxido`} 
            tituloTabla={`Niveles de CO`}
            campoTablaCo2={"CO"}
            valorCampoCo2={"dioxido_carbono"}
            simboloCo2={"ppm"}
            subValor={"2"}
            estado={true} />
        )
      }
    </TablaCO2Container>
  )
}

export default TablaCO2