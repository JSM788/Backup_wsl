import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HerramientasTabla from "../components/HerramientasTabla";
import Reutilizable from "./Reutilizable";

const Humedad = () => {
  const { id } = useParams();
  const [listaActiva, setListaActiva] = useState(true);
  const [estadisticaBtn, setEstadisticaBtn] = useState(false);
  return (
    <>
      <HerramientasTabla
        listaActiva={listaActiva}
        setListaActiva={setListaActiva}
        estadisticaBtn={estadisticaBtn}
        setEstadisticaBtn={setEstadisticaBtn}
      />

      {listaActiva && (
        <Reutilizable
          apiUrl={`/sensors/api/sensor/${id}/humedad`}
          tituloTabla={"Humedad"}
          campoTablaCo2={"Humedad"}
          valorCampoCo2={"humidity"}
          simboloCo2={"RH"}
          estado={true}
        />
      )}
    </>
  );
};

export default Humedad;
