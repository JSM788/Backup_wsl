import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HerramientasTabla from "../components/HerramientasTabla";
import Reutilizable from "./Reutilizable";

export const Temperatura = () => {
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
          apiUrl={`/sensors/api/sensor/${id}/temperatura`}
          tituloTabla={"Temperatura"}
          campoTablaCo2={"Temperatura"}
          valorCampoCo2={"temperature"}
          simboloCo2={"C°"}
          estado={true}
        />
      )}
    </>
  );
};
