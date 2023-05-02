import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IndicadorApiContent from '../components/IndicadorApiContent';
import { clienteAxiosValhalla } from '../config/axios';

const LuzDate = () => {
  const { id } = useParams();
  const [doneApi, setDoneApi] = useState(0);
  const [porcentajeApi, setPorcentajeApi] = useState(0);
  const [estadoText,setEstadoText] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await clienteAxiosValhalla.get(
      `/sensors/api/promedio/${id}/general`
    );
    setDoneApi(res.data.data.luminity);
    if (res.data.data.luminity > 0 && res.data.data.luminity < 301) {
      setPorcentajeApi(res.data.data.luminity*0.333);
      setEstadoText('Nivel bajo')
    } else if (res.data.data.luminity > 300 && res.data.data.luminity < 501) {
      setPorcentajeApi((res.data.data.luminity - 300)*0.5);
      setEstadoText('Normal')
    } else if (res.data.data.luminity > 500) {
      setPorcentajeApi((res.data.data.luminity - 500) * 0.1);
      setEstadoText('Nivel alto')
    } else {
      setPorcentajeApi(0);
      setEstadoText('Nivel bajo')
    }

    return res.data;
  };
  return (
    <>
        <IndicadorApiContent
              //Tabla 
              title="Luz" 
              apiUrl={`/sensors/api/sensor/${id}/luz`}
              campoTablaCo2={'Luz'}
              valorCampoCo2={"illumination"}
              simboloCo2={"lux"}
              estado={true}
              //Grafico
              DataMin={0}
              DataMax={1500}
              DataKeyEjeX={"illumination"}
              rango1={301}
              rango2={501}
              rango3={1501}
              rangoColor1={"#febc2d"}
              rangoColor2={"#57d2a9"}
              rangoColor3={"red"}
              //Filtracion
              indicadorURL={"luz"}
              //Promedios
              done={doneApi}
              porcentajeData={porcentajeApi}
              simbolo={"Lux"}
              estadoPromedio={estadoText}
              //Modal
              modalMide={"luz"}
            />
    </>
  )
}

export default LuzDate