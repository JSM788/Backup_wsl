import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePromedios from "../hooks/usePromedios";
import IndicadorApiContent from "../components/IndicadorApiContent";


const Co2Date = () => {

  const { id } = useParams();

  const indicator = 'carbon_dioxide'

  const { value, status } = usePromedios(id, indicator)

  return (
    <>
      <IndicadorApiContent 
        //Tabla
        title="CO2" 
        idRoom={id}
        indicator={indicator}
        campoTablaCo2={"CO"}
        valorCampoCo2={"value_indicator"}
        simboloCo2={"ppm"}
        subValor={"2"}
        estado={true}
        //Grafico
        DataMin={0}
        DataMax={2000}
        dangerLine='1000'
        contaminatedLine='800'
        //Promedios
        done={value}
        porcentajeData={100}
        simbolo={"ppm"}
        estadoPromedio={status}
        //Modal
        modalMide={"co2"}
      />
    </>
  );
};

export default Co2Date;
