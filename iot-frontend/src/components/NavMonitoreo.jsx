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
import PIR from '../assets/svg/pir.svg';
import PIRSelect from '../assets/svg/pirSelect.svg';
import { convert } from '../utils/navLogic';
import { useEffect } from 'react';

const NavMonitoreo = ({measurables}) => {
  const location = useLocation()
  const urlActual = location.pathname
  const { id } = useParams()

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

  const getActiveClass = (url) => `${urlActual === `/sistema/monitoreoAmbiental/${id}${url && '/'+url}` ? "link__actual" : null}`

  const getActiveImg = (url, img, selImg) => urlActual === `/sistema/monitoreoAmbiental/${id}${url && '/'+url}` ? <img src={selImg} alt="icon" /> : <img src={img} alt="icon" />

  useEffect(()=>{
    console.log(measurables)
  },[])

  return (
    <ContenedorNav flex="start">
      {
        navButtons.map(elem=> measurables?.includes(convert(elem.indicator)) ? (
          <Link to={elem.url} key={elem.indicator}>
            <Option className={getActiveClass(elem.url)}>
                {getActiveImg(elem.url, elem.image, elem.selectedImage)}
              &nbsp;<h4>{elem.indicator}</h4>
            </Option>
          </Link>
        ):(
          <Link className='disabled' to={elem.url} key={elem.indicator}>
            <Option className={getActiveClass(elem.url)+' disabled'}>
                {getActiveImg(elem.url, elem.image, elem.selectedImage)}
              &nbsp;<h4>{elem.indicator}</h4>
            </Option>
          </Link>
        ))
      }
      {/* <Link to="pir">
        <Option className={`${urlActual === `/sistema/monitoreoAmbiental/${id}/pir` ? "link__actual" : null} `}>
            {urlActual === `/sistema/monitoreoAmbiental/${id}/pir` ? <img src={PIRSelect} alt="icon" /> : <img src={PIR} alt="icon" />}
            &nbsp;<h4>PIR</h4>
        </Option>
      </Link> */}
    </ContenedorNav>
  )
}

export default NavMonitoreo