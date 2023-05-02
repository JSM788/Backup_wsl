import React from 'react'
import { useLocation } from "react-router-dom";
import Nube from '../assets/svg/nube.svg';
import NubeSelect from '../assets/svg/nubeSelect.svg';
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
import { ContenedorNavAlertas, NavButton } from '../styles/AlertasStyle';
import { convert } from '../utils/alertNavLogic';

const NavAlertas = ({measurables, selected, setSelected, setOffset}) => {
    
  const location = useLocation();
  const urlActual = location.pathname;

  const totalSetter = (indicator) =>{
    setSelected(indicator)
    setOffset(0)
  }

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
      indicator: 'PM2'
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
    }
  ]
  
  const verificator = ( param ) => selected===param

  const getActiveClass = (param) => verificator(param) ? "link__actual" : null

  const getActiveImg = (param, img, selImg) => verificator(param) ? <img src={selImg} alt="icon" /> : <img src={img} alt="icon" />

  return (
    <ContenedorNavAlertas>
      {
        navButtons.map(elem=> measurables?.includes(convert(elem.indicator)) ? (
          <NavButton 
            className={getActiveClass(elem.indicator)}
            onClick={()=>totalSetter(elem.indicator)}
          >
            {getActiveImg(elem.indicator,elem.image,elem.selectedImage)}
            &nbsp;<h4>{elem.indicator}</h4>
          </NavButton>
        ):(
          <NavButton 
            className={`disabled ${getActiveClass(elem.indicator)} `}
          >
            {getActiveImg(elem.indicator,elem.image,elem.selectedImage)}
            &nbsp;<h4>{elem.indicator}</h4>
          </NavButton>
        ))
      }
    </ContenedorNavAlertas>
  )
}

export default NavAlertas