import React from 'react'
import { BoxDisplay, DisplayIcono, DisplayImg, DisplayNumber, DisplayResumen } from '../styles/MonitoreoStyle'

import LineaImg from '../assets/svg/LineaImg.svg';
import NubeSelect from '../assets/svg/nubeSelect.svg';
import TermometroSelect from '../assets/svg/termometroSelect.svg';
import HumedadSelect from '../assets/svg/humedadSelect.svg';
import PMSelect from '../assets/svg/pmSelect.svg';
import PM10Select from '../assets/svg/PM10Select.svg';
import TVOCSelect from '../assets/svg/tvocSelect.svg';
import HCHOSelect from '../assets/svg/hchoSelect.svg';
import OzonoSelect from '../assets/svg/ozonoSelect.svg';
import PresionSelect from '../assets/svg/presionSelect.svg';
import PIRSelect from '../assets/svg/pirSelect.svg';

const DisplayComponents = ({roomStatus}) => {
  return (
    <BoxDisplay>
        <DisplayResumen>
            <DisplayIcono>
                <img src={NubeSelect} alt="icon" />
                <DisplayImg>
                    <h4>CO2</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.carbon_dioxide}</h4>
                <h5>ppm</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={TermometroSelect} alt="icon" />
                <DisplayImg>
                    <h4>Temperatura</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.temperature}</h4>
                <h5>C°</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={HumedadSelect} alt="icon" />
                <DisplayImg>
                    <h4>Humedad</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.humidity}</h4>
                <h5>%</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={PMSelect} alt="icon" />
                <DisplayImg>
                    <h4>PM2.5</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.pm2}</h4>
                <h5>µg/m2</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={PM10Select} width={"25px"} alt="icon" />
                <DisplayImg>
                    <h4>PM10</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.pm10}</h4>
                <h5>µg/m2</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={TVOCSelect} alt="icon" />
                <DisplayImg>
                    <h4>TVOC</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.tvoc}</h4>
                <h5>ppb</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={HCHOSelect} alt="icon" />
                <DisplayImg>
                    <h4>HCHO</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.hcho}</h4>
                <h5>mg/m3</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={OzonoSelect} alt="icon" />
                <DisplayImg>
                    <h4>Ozono</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.ozono}</h4>
                <h5>µg/m3</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={PresionSelect} alt="icon" />
                <DisplayImg>
                    <h4>Presión B.</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.pressure}</h4>
                <h5>hPa</h5>
            </DisplayNumber>
        </DisplayResumen>
        <DisplayResumen>
            <DisplayIcono>
                <img src={PIRSelect} alt="icon" />
                <DisplayImg>
                    <h4>PIR</h4>
                    <img src={LineaImg} alt="linea" />
                </DisplayImg>
            </DisplayIcono>
            <DisplayNumber>
                <h4>{roomStatus.pir==='idle' ? 'Desocupado' : 'Ocupado'}</h4>
                <h5>-</h5>
            </DisplayNumber>
        </DisplayResumen>
    </BoxDisplay>
  )
}

export default DisplayComponents