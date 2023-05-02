import React from "react";
import SVGVerde from "../assets/svg/emojiVerde.svg";
import SVGMostasa from "../assets/svg/emojiAmarillo.svg";
import SVGRojo from "../assets/svg/emojiRojo.svg";
import { RangoBox, SVGLogo } from "../styles/IndicadoresStyle";
import { thresholdReturner } from "../utils/thresholdLogic";

const RangoEstadosLogica = ({modalMide}) => {

  const comparer = 
    (modalMide === "CO2" ||
      modalMide === "PM2.5"  ||
      modalMide === "PM10"||
      modalMide=== "TVOC" ||
      modalMide=== "HCHO" ||
      modalMide=== "Ozono")

  const returner = thresholdReturner(modalMide)

  return (
    <>
    {comparer && 
      (<>
        <RangoBox>
          <SVGLogo>
            <img src={SVGVerde} alt="icon" />
            <p>Bueno</p>
          </SVGLogo>
          <span>{returner.safe}</span>
        </RangoBox>
        <RangoBox>
          <SVGLogo>
            <img src={SVGMostasa} alt="icon" />
            <p>Regular</p>
          </SVGLogo>
          <span>{returner.contaminated}</span>
        </RangoBox>
        <RangoBox>
          <SVGLogo>
            <img src={SVGRojo} alt="icon" />
            <p>Malo</p>
          </SVGLogo>
          <span> {returner.dangerous}</span>
        </RangoBox>
      </>)
    }
    {modalMide=== "Presión barométrica" && (
    <>
      <RangoBox>
      <SVGLogo>
        <img src={SVGMostasa} alt="icon" />
        <p>Baja presión</p>
      </SVGLogo>
      <span>0 - 759 hPa</span>
    </RangoBox>

    <RangoBox>
      <SVGLogo>
        <img src={SVGVerde} alt="icon" />
        <p>Normal</p>
      </SVGLogo>
      <span>760 - 1013 hPa</span>
    </RangoBox>
    <RangoBox>
      <SVGLogo>
        <img src={SVGRojo} alt="icon" />
        <p>Alta presión</p>
      </SVGLogo>
      <span>1014 - 3000 hPa</span>
    </RangoBox>
    </>
    )}
    {modalMide=== "PIR" && (
    <>
    <RangoBox>
      <SVGLogo>
        <img src={SVGVerde} alt="icon" />
        <p>Ocupado</p>
      </SVGLogo>
      <span>En actividad</span>
    </RangoBox>
    <RangoBox>
      <SVGLogo>
        <img src={SVGRojo} alt="icon" />
        <p>Desocupado</p>
      </SVGLogo>
      <span>Sin actividad</span>
    </RangoBox>
    </>
    )}
    {modalMide=== "luz" && (
      <>
      <RangoBox>
      <SVGLogo>
        <img src={SVGMostasa} alt="icon" />
        <p>Nivel bajo</p>
      </SVGLogo>
      <span>0 - 300 Lux</span>
    </RangoBox>

    <RangoBox>
      <SVGLogo>
        <img src={SVGVerde} alt="icon" />
        <p>Normal</p>
      </SVGLogo>
      <span>301 - 500 Lux</span>
    </RangoBox>
    <RangoBox>
      <SVGLogo>
        <img src={SVGRojo} alt="icon" />
        <p>Nivel alto</p>
      </SVGLogo>
      <span>501 - 1500 Lux</span>
    </RangoBox>
    </>
    )}
    {modalMide=== "Temperatura" && (
    <>
      <RangoBox>
      <SVGLogo>
        <img src={SVGMostasa} alt="icon" />
        <p>Nivel Bajo</p>
      </SVGLogo>
      <span>0 - 16 C°</span>
    </RangoBox>

    <RangoBox>
      <SVGLogo>
        <img src={SVGVerde} alt="icon" />
        <p>Normal</p>
      </SVGLogo>
      <span>17 - 27 C°</span>
    </RangoBox>
    <RangoBox>
      <SVGLogo>
        <img src={SVGRojo} alt="icon" />
        <p>Nivel Alto</p>
      </SVGLogo>
      <span> {'>'} 27 C°</span>
    </RangoBox>
    </>
    )}
    {modalMide=== "Humedad" && (
    <>
      <RangoBox>
      <SVGLogo>
        <img src={SVGMostasa} alt="icon" />
        <p>Seco</p>
      </SVGLogo>
      <span>0 - 30 %RH</span>
    </RangoBox>

    <RangoBox>
      <SVGLogo>
        <img src={SVGVerde} alt="icon" />
        <p>Normal</p>
      </SVGLogo>
      <span>30 - 70 %RH</span>
    </RangoBox>
    <RangoBox>
      <SVGLogo>
        <img src={SVGRojo} alt="icon" />
        <p>Humedad alta</p>
      </SVGLogo>
      <span> {'>'} 70 %RH</span>
    </RangoBox>
    </>
    )}
    </>
  )
}

export default RangoEstadosLogica
