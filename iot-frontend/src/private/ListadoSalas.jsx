import React, { useState, useEffect, useContext } from "react";
import { ModalFiltrarListaCo2 } from "../components/ModalFiltrarListaCo2";
import { AuthContext } from "../context/auth/AuthProvider";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";
import { TablaListadoSalas } from "../tablasCO2/TablaListadoSalas";

import {
  ContenedorModulo,
  Opciones,
  OpcionesBtn,
  TablaContenedor,
  TitlePage,
} from "../styles/Usables";
import { ContainerAnimationPage } from "../animation/Animacion";
import {
  BoxSelectSalas,
  BuscarBox,
  SelectIndicadorSalas,
} from "../styles/SalasStyle";
import useFilters from "../hooks/useFilters";

export const ListadoSalas = () => {
  const { rutaReset } = useContext(AuthContext)
  const { FiltrarIndicadoresReset, FiltrarSalasSearch } = useContext(FiltrosContext)

  const { sedes, getSedes, getSalas } = useFilters()

  const [buscarSalas, setBuscarSalas] = useState("")

  const [filtros, setFiltros] = useState({
    sede: "",
    zona: "",
    estado: "",
  });

  useEffect(()=>{
    getSedes()  
  },[])

  const { sede, estado } = filtros

  const handleChange = (e) => {
    console.log(e.target.value)
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  }

  const handleSearch = (e) => {
    setBuscarSalas(e.target.value)
    FiltrarSalasSearch(e.target.value)
  }

  useEffect(() => {
    rutaReset()
    FiltrarIndicadoresReset()
  }, [])

  return (
    <ContainerAnimationPage>
      <ContenedorModulo>
        <Opciones>
          <h2>Filtros:</h2>
          <BuscarBox>
            <input
              type="text"
              monitoreo="196px"
              name="buscar"
              id="buscar"
              value={buscarSalas}
              onChange={handleSearch}
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </BuscarBox>
          <BoxSelectSalas>
            <SelectIndicadorSalas
              monitoreo="196px"
              name="sede"
              id="sede"
              value={sede}
              onChange={e=>{
                handleChange(e)
                getSalas(e.target.value)
              }}
            >
              <option value="">Todas las sedes</option>
              {sedes.map((sedeF) => {
                return (
                  <option key={sedeF.id} value={sedeF.id}>
                    {sedeF.name}
                  </option>
                );
              })}
            </SelectIndicadorSalas>
          </BoxSelectSalas>
          <BoxSelectSalas>
            <SelectIndicadorSalas
              monitoreo="196px"
              name="estado"
              id="estado"
              value={estado}
              onChange={handleChange}
            >
              <option value="">Estado</option>
              <option value="EXCELLENT">Excelente</option>
              <option value="CONTAMINATED">Regular</option>
              <option value="DANGEROUS">Malo</option>
            </SelectIndicadorSalas>
          </BoxSelectSalas>
        </Opciones>
      </ContenedorModulo>
      <TablaContenedor>
        <TablaListadoSalas sede={sede} estado={estado}/>
      </TablaContenedor>
    </ContainerAnimationPage>
  );
};
