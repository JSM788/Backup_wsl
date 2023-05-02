import React, { useContext, useState,useEffect } from "react";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";

import {Overlay,ContenedorModal,CerrarModalStyle,BotonOrder} from '../styles/ModalStyle'
import {Formulario,Box1,TitleForm,Hr,GridForm,GrupoForm,LabelForm,InputForm,BotonForm} from '../styles/FormularioEditar'
import { ContainerAnimationModal } from "../animation/Animacion";

export const ModalFiltrarListaCo2 = ({ modalFiltrar, setModalFiltrar, setEli, eliFiltro }) => {
  const {
    FiltrarSalasSearch,
    FiltrarSalaOrderNumber,
    FiltrarSalaOrderName
  } = useContext(FiltrosContext);

  const [mSearh, setMSearch] = useState("");
  const [mOrdenarSensor, setMOrdenarSensor] = useState("");
  const [mOrdenarNombre, setMSOrdenarNombre] = useState("");
  

  const CerrarModalFiltrar = () => {
    setModalFiltrar(false);
  };

  useEffect(() => {
    if (eliFiltro===true) {
    setMOrdenarSensor("");
    setMSOrdenarNombre("");
    }
    setEli(false);

  },[eliFiltro])
  

  const FSearch = (e) => {
    setMSearch(e.target.value);
  };
  const BotonFiltrar = (e) => {
    e.preventDefault();
    FiltrarSalasSearch(mSearh);
    if (mOrdenarSensor==="true") {
        FiltrarSalaOrderNumber();
    }
    if (mOrdenarNombre==="true") {
        FiltrarSalaOrderName();
    }
    console.log(mSearh);
    setModalFiltrar(false);
  };

  const OrdenarNombre = (e)=> {
    e.preventDefault();
    if (mOrdenarNombre==="true") {
        setMSOrdenarNombre("")
    }else{
        setMSOrdenarNombre("true")
    }
  }
  const OrdenarSensor = (e)=> {
    e.preventDefault();
    if (mOrdenarSensor==="true") {
        setMOrdenarSensor("")
    }else{
        setMOrdenarSensor("true")
    }
  }
  return (
    <>
    {modalFiltrar && (
      <ContainerAnimationModal>
      <Overlay>
        <ContenedorModal>
          <CerrarModalStyle onClick={CerrarModalFiltrar}>
            X
          </CerrarModalStyle>
          <Formulario autoComplete="off">
            <Box1>
              <TitleForm>Filtrar Informacion</TitleForm>
              <br />
              <Hr />
              <GridForm grid="3">
                {/* Nombres y Apellidos */}
                <GrupoForm>
                  <LabelForm htmlFor="search">
                    Buscar
                  </LabelForm>
                  <div>
                    <InputForm
                      type="text"
                      name="search"
                      id="search"
                      value={mSearh}
                      onChange={FSearch}
                    />
                  </div>
                </GrupoForm>
                {/* #Sensores */}
                <GrupoForm>
                  <LabelForm htmlFor="ordenarN">
                    Ordenar por #Sensores
                  </LabelForm>
                  <div>
                    <BotonOrder id="ordenarN" onClick={OrdenarSensor}  activado={mOrdenarSensor==="true" ? "activadoF": null}>Ordenar</BotonOrder>
                  </div>
                </GrupoForm>

                {/* Orden por Nombre */}
                <GrupoForm>
                  <LabelForm htmlFor="ordenarName">
                    Orden por Nombre
                  </LabelForm>
                  <div>
                    <BotonOrder id="ordenarName" onClick={OrdenarNombre}  activado={mOrdenarNombre==="true" ? "activadoF": null}>Ordenar</BotonOrder>
                  </div>
                </GrupoForm>
                
                {/* boton */}
                <BotonForm grid="3">
                  <InputForm
                    type="submit"
                    value="FILTRAR DATOS"
                    onClick={BotonFiltrar}
                  />
                </BotonForm>
              </GridForm>
            </Box1>
          </Formulario>
        </ContenedorModal>
      </Overlay>
      </ContainerAnimationModal>
    )}
  </>
  );
};
