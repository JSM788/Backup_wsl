import React, { useState } from "react";
import {
  BotonesModales,
  ContenedorPromedios,
  ProgessEstado,
  Progress,
  ProgressNumber,
  ProgressNumberText,
  PromedioBox,
  PromedioFlex,
  RangoBotones,
  RangoEstados,
} from "../styles/IndicadoresStyle";
import ModalConsejos from "./ModalConsejos";
import Modaledicion from "./Modaledicion";
import RangoEstadosLogica from "./RangoEstadosLogica";

const Promedios = ({
  title,
  done,
  estadoPromedio,
  diff,
  simbolo,
  modalMide,
  textoPIR
}) => {
  const [porcentajeBar, setPorcentajeBar] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalConsejo, setModalConsejo] = useState(false);

  const statusReturner = (status) =>{
    return states[status]?.status
  }

  const PIRColorReturner = (text) =>{
    return textoPIR === 'Ocupado' ? '#57D2A9' : "#F0142F"
  }

  const colorReturner = (status) =>{
    return textoPIR ? PIRColorReturner(textoPIR) : states[status]?.color
  }

  const valueReturner = (status) =>{
    return states[status]?.value
  }

  const states = {
    LOW: {
      status: 'Bueno',
      color: '#57D2A9',
      value: 0,
    },

    NORMAL: {
      status: 'Regular',
      color: '#FEBC2D',
      value: 1,
    },

    HIGH:{
      status: 'Malo',
      color: "#F0142F",
      value: 2,
    }
  }

  const modalBtnMide = () => {
    setModal(true);
  }

  const modalBtnConsejo = () => {
    setModalConsejo(true);
  }

  const countDecimals = (number) => {
    if(Math.round(number) === number) return 0;
    return number?.toString()?.split(".")?.[1]?.length || 0; 
  }

  const valorFixeado = () =>{   
    if(countDecimals(done)>0){
      if(title==='HCHO') return done.toFixed(2)
      if(title==='PM2.5') return done.toFixed(1)
      return Math.round(done)
    }
    return done
  }

  function checker(val){
    return val === 'co2' || val === 'pm' || val === 'pm10' || val === 'tvoc' || val === 'hcho' || val === 'ozono'
  }

  return (
    <ContenedorPromedios>
      <Modaledicion modal={modal} setModal={setModal} modalMide={modalMide} />
      <ModalConsejos 
        modalConsejo={modalConsejo} 
        setModalConsejo={setModalConsejo} 
        modalMide={modalMide} 
        estadoPromedio={textoPIR ? estadoPromedio : valueReturner(estadoPromedio)} 
      />      
      <PromedioBox>
        <PromedioFlex>
          <h2>Promedio del día</h2>
          <p>Se actualizó hace {diff} min.</p>
        </PromedioFlex>
        <PromedioFlex gap>
          <div>         
            <Progress
              porcentage={porcentajeBar}
              color={colorReturner(estadoPromedio)}
            >
              <ProgressNumber>
                <ProgressNumberText colorsi1={colorReturner(estadoPromedio)}>
                  {valorFixeado()}
                </ProgressNumberText>
                <span>{simbolo}</span>
              </ProgressNumber>
            </Progress>
            <ProgessEstado colorsi1={colorReturner(estadoPromedio)}>
              { textoPIR || statusReturner(estadoPromedio) || <>&nbsp;</>}
            </ProgessEstado>
          </div>
          <RangoEstados>
            <RangoEstadosLogica modalMide={title} />
            <RangoBotones>
              <BotonesModales onClick={modalBtnMide} btncolor="#131523">
                ¿Qué se mide?
              </BotonesModales>
              {
                checker(modalMide) && (
                  <BotonesModales 
                    onClick={modalBtnConsejo} 
                    btncolor={'#7e84a3' || colorReturner(estadoPromedio)}
                  >
                    ¿Qué ocasiona?
                  </BotonesModales>
                )
              }
            </RangoBotones>
          </RangoEstados>
        </PromedioFlex>
      </PromedioBox>
    </ContenedorPromedios>
  );
};

export default Promedios;
