import React from "react";
import { Link } from "react-router-dom";
import {
  BoxLink,
  BtnIndicador,
  BtnOn,
  CardEstado,
  CardInfo1,
  CardInfoSub,
  CardSala,
  Circle,
  CircleBox,
  Hr,
} from "../styles/SalasStyle";
import SalaVerde from "../assets/svg/SALA_VERDE.svg";
import SalaAmarilla from "../assets/svg/SALA_AMARILLA.svg";
import SalaRojo from "../assets/svg/SALA_ROJO.svg";
import { returner } from "../utils/statusLogic";

const CardLista = ({ item }) => {
  
  const { color, value } = returner(item.status)

    return(
    <CardSala
      key={item.id}
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
    >
      <CardEstado>
        {item.status==="EXCELLENT" && <img src={SalaVerde} alt="estado" />}
        {item.status==="CONTAMINATED" && <img src={SalaAmarilla} alt="estado" />}
        {item.status==="DANGEROUS" && <img src={SalaRojo} alt="estado" />}
        <CardInfo1 color={color}>
          <h4> {value} </h4>
          <p> {item.name} </p>
        </CardInfo1>
      </CardEstado>
      <CardInfoSub>
        <h4>Sensor</h4>
        <p>{item.code_sensors[0]?.dev_eui || "Ninguno"}</p>
      </CardInfoSub>
      <CardInfoSub>
        <h3>Estado</h3>
        <BtnOn>
          {" "}
          <CircleBox>
            {" "}
            <Circle></Circle>
          </CircleBox>
          <h4>Conectado</h4>
        </BtnOn>
      </CardInfoSub>
      <Hr />
      <CardInfoSub>
        <h3>Sede</h3>
        <p>{item.headquarter_name}</p>
      </CardInfoSub>
      <BoxLink>
        <Link to={`monitoreoAmbiental/${item.id}`}>
          <BtnIndicador>
            Ver monitoreo de sala
          </BtnIndicador>
        </Link>
      </BoxLink>
    </CardSala>
  )
};

export default CardLista;
