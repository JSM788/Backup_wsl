import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";
import { ContenedorNav, Option } from "../styles/IndicadoresStyle";
import Nube from '../assets/svg/nube.svg';
import NubeSelect from '../assets/svg/nubeSelect.svg';
import Termometro from '../assets/svg/termometro.svg';
import TermometroSelect from '../assets/svg/termometroSelect.svg';
import Humedad from '../assets/svg/humedad.svg';
import HumedadSelect from '../assets/svg/humedadSelect.svg';
import PM from '../assets/svg/pm.svg';
import PMSelect from '../assets/svg/pmSelect.svg';
import PM10 from '../assets/svg/PM10.svg';
import PM10Select from '../assets/svg/PM10Select.svg';
import TVOC from '../assets/svg/tvoc.svg';
import TVOCSelect from '../assets/svg/tvocSelect.svg';
import HCHO from '../assets/svg/hcho.svg';
import HCHOSelect from '../assets/svg/hchoSelect.svg';
import Ozono from '../assets/svg/ozono.svg';
import OzonoSelect from '../assets/svg/ozonoSelect.svg';
import Presion from '../assets/svg/presion.svg';
import PresionSelect from '../assets/svg/presionSelect.svg';
import PIR from '../assets/svg/pir.svg';
import PIRSelect from '../assets/svg/pirSelect.svg';
import LUZ from '../assets/svg/luz.svg';
import LUZSelect from '../assets/svg/luzSelect.svg';
import { ContenedorNavEstadisticas, EstadisticaOption } from '../styles/EstadisticasStyle';
import { convert } from '../utils/navLogic';

const NavEstadisticas = ({
  measurables,
  indicator,
  setIndicator
}) => {

  const navButtons = [
    {
      url: "",
      image: Nube,
      selectedImage: NubeSelect,
      indicator: 'CO2'
    },
    {
      url: "pm",
      image: PM,
      selectedImage: PMSelect,
      indicator: 'PM2.5'
    },
    {
      url: "pm10",
      image: PM10,
      selectedImage: PM10Select,
      indicator: 'PM10'
    },
    {
      url: "tvoc",
      image: TVOC,
      selectedImage: TVOCSelect,
      indicator: 'TVOC'
    },
    {
      url: "hcho",
      image: HCHO,
      selectedImage: HCHOSelect,
      indicator: 'HCHO'
    },
    {
      url: "ozono",
      image: Ozono,
      selectedImage: OzonoSelect,
      indicator: 'Ozono'
    },
    {
      url: "temperatura",
      image: Termometro,
      selectedImage: TermometroSelect,
      indicator: 'Temperatura'
    },
    {
      url: "humedad",
      image: Humedad,
      selectedImage: HumedadSelect,
      indicator: 'Humedad'
    }
  ]
  
  const verificator = ( param ) => indicator===param

  const getActiveClass = (param) => `${verificator(param) ? "link__actual" : null} `

  const getActiveImg = (param, img, selImg) => verificator(param) ? <img src={selImg} alt="icon" /> : <img src={img} alt="icon" />

  return (
    <ContenedorNavEstadisticas>
      {
        navButtons.map(elem=> measurables?.includes(convert(elem.indicator)) ? (
          <EstadisticaOption
            key={elem.indicator}
            onClick={()=>setIndicator(elem.indicator)} 
            className={getActiveClass(elem.indicator)}
          >
            {getActiveImg(elem.indicator, elem.image, elem.selectedImage)}
            &nbsp;<h4>{elem.indicator}</h4>
          </EstadisticaOption>
        ):(
          <EstadisticaOption
            key={elem.indicator}
            onClick={()=>setIndicator(elem.indicator)} 
            className={`disabled ${getActiveClass(elem.indicator)}`}
          >
            {getActiveImg(elem.indicator, elem.image, elem.selectedImage)}
            &nbsp;<h4>{elem.indicator}</h4>
          </EstadisticaOption>
        ))
      }
    </ContenedorNavEstadisticas>
  )
}

export default NavEstadisticas