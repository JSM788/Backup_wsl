import { useParams } from "react-router-dom";
import IndicadorApiContent from "../components/IndicadorApiContent";
import usePromedios from "../hooks/usePromedios";

const HumedadDate = () => {
  
  const { id } = useParams();

  const indicator = 'humidity'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent
        title="Humedad"
        apiUrl={`/sensors/api/sensor/indicators`}
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={"Humedad"}
        valorCampoCo2={"humidity"}
        simboloCo2={"RH"}
        estado={true}
        DataMin={0}
        DataMax={100}
        DataKeyEjeX={"humidity"}
        rango1={41}
        rango2={81}
        rango3={101}
        rangoColor1={"#febc2d"}
        rangoColor2={"#57d2a9"}
        rangoColor3={"red"}
        indicadorURL={"humedad"}
        done={value}
        porcentajeData={100}
        simbolo={"%RH"}
        estadoPromedio={status}
        //Modal
        modalMide={"humedad"}
      />
    </>
  );
};

export default HumedadDate;
