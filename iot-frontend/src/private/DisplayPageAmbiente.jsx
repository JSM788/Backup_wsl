import React, { useEffect, useState } from "react";
import {
  BoxEstadoDisplay,
  BoxEstadoText,
  CalidadBox,
  CerrarDisplay,
  ContenedorDisplay,
  ProgressAmbiente,
  ProgressSvg,
  TimeUpdate,
  TimeUpdateBox,
} from "../styles/MonitoreoStyle";
import EmojiVerde from "../assets/svg/emojiVerde.svg";
import EmojiAmarillo from '../assets/svg/emojiAmarillo.svg';
import EmojiRojo from '../assets/svg/emojiRojo.svg';
import { Cronometro } from "../components/Cronometro";
import DisplayComponents from "../components/DisplayComponents";
import { returner } from "../utils/statusLogic";

const DisplayPageAmbiente = ({
  CambiarPage,
  roomStatus
}) => {

  const [HoraApi, setHoraApi] = useState("00")
  const [horario, setHorario] = useState("AM")
  const [minutoRender, setMinutoRender] = useState("00")
  
  const { color, value } = returner(roomStatus.general_status)

  useEffect(() => {
    setHour()
    const interval = setInterval(()=>{
      setHour()
    }, 2000)
    return () =>{
      clearInterval(interval)
    }
  },[])

  const setHour = () =>{
    const hoy = new Date();
    const hora = hoy.getHours();
    const minuto = hoy.getMinutes();
    if (hora > 12) {
      setHoraApi(hora-12)
      setHorario("PM")
    } else {
      setHoraApi(hora)
      setHorario("AM")      
    }
    
    if (minuto < 10) {
      setMinutoRender(`0${minuto}`)
    }else{
      setMinutoRender(`${minuto}`)
    }
    
  }

  return (
    <ContenedorDisplay>
      <CerrarDisplay onClick={CambiarPage}>✖</CerrarDisplay>
      <CalidadBox>
        <h4>Monitoreo diario</h4>
        {/* <h1>Zona A</h1> */}
        <h1>{roomStatus.room}</h1>
        <br />
        <BoxEstadoDisplay>
          <ProgressAmbiente
            display
            porcentage={100}
            color={color}
          >
            <ProgressSvg display>
              {roomStatus.general_status==="EXCELLENT" && <img src={EmojiVerde} alt="estado" />}
              {roomStatus.general_status==="CONTAMINATED" && <img src={EmojiAmarillo} alt="estado" />}
              {roomStatus.general_status==="DANGEROUS" && <img src={EmojiRojo} alt="estado" />}
            </ProgressSvg>
          </ProgressAmbiente>
          <BoxEstadoText color={color}>
            <h2>Calidad de aire</h2>
            <h3>{value}</h3>
          </BoxEstadoText>
        </BoxEstadoDisplay>
        <TimeUpdate>
          <TimeUpdateBox>
            <h4> {HoraApi}:{minutoRender} <p>{horario}</p> </h4>
            <h2>Últimos datos actualizados</h2>
          </TimeUpdateBox>
        </TimeUpdate>
      </CalidadBox>
      <DisplayComponents roomStatus={roomStatus} />
    </ContenedorDisplay>
  );
};

export default DisplayPageAmbiente;
