import React from "react";
import { AnimacionModalMedidas } from "../animation/Animacion";
import {
  BoxConsejo,
  CerrarModalStyle,
  ConsecuenciasGrid,
  ContenedorModalMedicion,
  FuentesTitle,
  ImgModal,
  MainImgModal,
  Medicion,
  Overlay,
  TextConsejo,
} from "../styles/ModalStyle";

import CO2Mide from "../assets/svg/CO2Mide.svg";
import TemperaturaMide from "../assets/svg/TemperaturaMide.svg";
import HumedadMide from "../assets/svg/HumedadMide.svg";
import PMMide from "../assets/svg/PMMide.svg";
import PM10Mide from "../assets/svg/PM10Mide.svg";
import TVOCMide from "../assets/svg/TVOCMide.svg";
import HCHOMide from "../assets/svg/HCHOMide.svg";
import OzonoMide from "../assets/svg/OzonoMide.svg";
import PresionMide from "../assets/svg/PresionMide.svg";
import PIRMide from "../assets/svg/PIRMide.svg";
import LuzMide from "../assets/svg/LuzMide.svg";

import Co2Consejo0 from "../assets/svg/Co2Consejo0.svg";
import Co2Consejo1 from "../assets/svg/Co2Consejo1.svg";
import Co2Consejo2 from "../assets/svg/Co2Consejo2.svg";

import temperaturaConsejo0 from "../assets/svg/temperaturaConsejo0.svg";
import temperaturaConsejo1 from "../assets/svg/temperaturaConsejo1.svg";
import temperaturaConsejo2 from "../assets/svg/temperaturaConsejo2.svg";

import humedadConsejo0 from "../assets/svg/humedadConsejo0.svg";
import humedadConsejo1 from "../assets/svg/humedadConsejo1.svg";
import humedadConsejo2 from "../assets/svg/humedadConsejo2.svg";

import PM25Consejo0 from "../assets/svg/PM25Consejo0.svg";
import PM25Consejo1 from "../assets/svg/PM25Consejo1.svg";
import PM25Consejo2 from "../assets/svg/PM25Consejo2.svg";

import PM10Consejo0 from "../assets/svg/pm10Consejo0.svg";
import PM10Consejo1 from "../assets/svg/pm10Consejo1.svg";
import PM10Consejo2 from "../assets/svg/pm10Consejo2.svg";

import tvocConsejo0 from "../assets/svg/tvocConsejo0.svg";
import tvocConsejo1 from "../assets/svg/tvocConsejo1.svg";
import tvocConsejo2 from "../assets/svg/tvocConsejo2.svg";

import HCHOConsejo0 from "../assets/svg/HCHOConsejo0.svg";
import HCHOConsejo1 from "../assets/svg/HCHOConsejo1.svg";
import HCHOConsejo2 from "../assets/svg/HCHOConsejo2.svg";

import ozonoConsejo0 from "../assets/svg/ozonoConsejo0.svg";
import ozonoConsejo1 from "../assets/svg/ozonoConsejo1.svg";
import ozonoConsejo2 from "../assets/svg/ozonoConsejo2.svg";

import presionConsejo0 from "../assets/svg/presionConsejo0.svg";
import presionConsejo1 from "../assets/svg/presionConsejo1.svg";
import presionConsejo2 from "../assets/svg/presionConsejo2.svg";

import pirConsejo0 from "../assets/svg/pirConsejo0.svg";
import pirConsejo1 from "../assets/svg/pirConsejo1.svg";

import luzConsejo0 from "../assets/svg/luzConsejo0.svg";
import luzConsejo1 from "../assets/svg/luzConsejo1.svg";
import luzConsejo2 from "../assets/svg/luzConsejo2.svg";

import DolorCabeza from "../assets/svg/consejos/co2/dolor-de-cabeza.svg"
import Somnolencia from "../assets/svg/consejos/co2/sueño.svg"
import Mareos from "../assets/svg/consejos/co2/mareos.svg"
import Asfixia from "../assets/svg/consejos/co2/asfixia.svg"
import Taquicardia from "../assets/svg/consejos/pm2/latidos.svg"
import AlergiaPiel from "../assets/svg/consejos/co2/alergias_piel.svg"
import PresionSanguinea from "../assets/svg/consejos/co2/presion-sanguinea.svg"
import BajoRendimiento from "../assets/svg/consejos/co2/bajo_rendimiento.svg"
import Respiratorios from "../assets/svg/consejos/co2/respiratorios.svg"

import Muerte from "../assets/svg/consejos/pm2/muerte_prematura.svg"
import Asma from "../assets/svg/consejos/pm2/asma.svg"
import Tos from "../assets/svg/consejos/pm2/tos.svg"
import FuncionPulmonar from "../assets/svg/consejos/pm2/función_pulmonar.svg"
import Irritacion from "../assets/svg/consejos/pm2/irritacion.svg"
import Silicosis from "../assets/svg/consejos/pm2/silicosis.svg"
import Afecciones from "../assets/svg/consejos/pm2/afeccion_pulmonar.svg"
import CancerPulmonar from "../assets/svg/consejos/pm2/cancer-de-pulmon.svg"

import Fatiga from "../assets/svg/consejos/tvoc/fatiga.svg"
import Riñones from "../assets/svg/consejos/tvoc/riñones.svg"
import Higado from "../assets/svg/consejos/tvoc/higado.svg"
import Estomacal from "../assets/svg/consejos/tvoc/dolor_estomacal.svg"
import Nauseas from "../assets/svg/consejos/tvoc/nauseas.svg"

import EdemaPulmonar from "../assets/svg/consejos/hcho/edema_pulmonar.svg"
import GoteoNasal from "../assets/svg/consejos/hcho/goteo_nasal.svg"
import CancerGarganta from "../assets/svg/consejos/hcho/cancer-de-garganta.svg"
import DolorPecho from "../assets/svg/consejos/hcho/dolor_pecho.svg"

import SistemaInmunologico from "../assets/svg/consejos/o3/sistema-inmunologico.svg"

const consequences = {
  co2:{
    mainImg: CO2Mide,
    content:[
      {
        img: DolorCabeza,
        txt: 'Dolor de cabeza'
      },
      {
        img: Somnolencia,
        txt: 'Somnolencia'
      },
      {
        img: Mareos,
        txt: 'Mareos'
      },
      {
        img: Asfixia,
        txt: 'Asfixia'
      },
      {
        img: Taquicardia,
        txt: 'Taquicardia'
      },
      {
        img: AlergiaPiel,
        txt: 'Enrojecimiento de la piel'
      },
      {
        img: PresionSanguinea,
        txt: 'Aumento de la presión sanguínea'
      },
      {
        img: BajoRendimiento,
        txt: 'Bajo rendimiento académico'
      },
      {
        img: Respiratorios,
        txt: 'Problemas respiratorios'
      },
    ]
  },
  pm:{
    mainImg: PMMide,
    content:[
      {
        img: Muerte,
        txt: 'Muerte prematura'
      },
      {
        img: Taquicardia,
        txt: 'Latidos irregulares'
      },
      {
        img: Asma,
        txt: 'Asma agravada'
      },
      {
        img: Tos,
        txt: 'Tos'
      },
      {
        img: FuncionPulmonar,
        txt: 'Función pulmonar reducida'
      },
      {
        img: Irritacion,
        txt: 'Irritación de ojos, nariz y garganta'
      },
      {
        img: Silicosis,
        txt: 'Silicosis y Asbestosis en los pulmones'
      },
      {
        img: Afecciones,
        txt: 'Afecciones respiratorias'
      },
      {
        img: CancerPulmonar,
        txt: 'Aumenta el riesgo de cáncer al pulmón'
      },
    ]  
  },
  pm10:{
    mainImg: PM10Mide,
    content:[
      {
        img: Muerte,
        txt: 'Muerte prematura'
      },
      {
        img: Taquicardia,
        txt: 'Latidos irregulares'
      },
      {
        img: Asma,
        txt: 'Asma agravada'
      },
      {
        img: Tos,
        txt: 'Tos'
      },
      {
        img: FuncionPulmonar,
        txt: 'Función pulmonar reducida'
      },
      {
        img: Irritacion,
        txt: 'Irritación de ojos, nariz y garganta'
      },
      {
        img: Silicosis,
        txt: 'Silicosis y Asbestosis en los pulmones'
      },
      {
        img: Afecciones,
        txt: 'Afecciones respiratorias'
      },
      {
        img: CancerPulmonar,
        txt: 'Aumenta el riesgo de cáncer al pulmón'
      },
    ]  
  },
  tvoc:{
    mainImg: TVOCMide,
    content:[
      {
        img: DolorCabeza,
        txt: 'Dolor de cabeza'
      },
      {
        img: Fatiga,
        txt: 'Fatiga'
      },
      {
        img: Riñones,
        txt: 'Daño en los riñones'
      },
      {
        img: Higado,
        txt: 'Daño hepático'
      },
      {
        img: Estomacal,
        txt: 'Dolores estomacales'
      },
      {
        img: Mareos,
        txt: 'Pérdida de coordinación'
      },
      {
        img: Nauseas,
        txt: 'Náuseas y vómitos de sangre'
      },
      {
        img: AlergiaPiel,
        txt: 'Reacciones alérgicas en la piel'
      },
      {
        img: Irritacion,
        txt: 'Irritación de ojos, nariz y garganta'
      },
    ]  
  },
  hcho:{
    mainImg: HCHOMide,
    content:[
      {
        img: Muerte,
        txt: 'Muerte'
      },
      {
        img: Nauseas,
        txt: 'Náuseas y vómitos'
      },
      {
        img: DolorCabeza,
        txt: 'Dolor de cabeza'
      },
      {
        img: EdemaPulmonar,
        txt: 'Edema pulmonar'
      },
      {
        img: GoteoNasal,
        txt: 'Goteo nasal'
      },
      {
        img: CancerGarganta,
        txt: 'Cancer de nariz y garganta'
      },
      {
        img: DolorPecho,
        txt: 'Tos, sibilancia, dolor de pecho'
      },
      {
        img: AlergiaPiel,
        txt: 'Irritación de la piel al contacto'
      },
      {
        img: Irritacion,
        txt: 'Irritación de ojos, nariz y garganta'
      },
    ]
  },
  ozono:{
    mainImg: OzonoMide,
    content:[
      {
        img: Tos,
        txt: 'Tos'
      },
      {
        img: Asma,
        txt: 'Ataques asmáticos'
      },
      {
        img: DolorCabeza,
        txt: 'Dolor de cabeza'
      },
      {
        img: FuncionPulmonar,
        txt: 'Malestar en las vias respiratorias'
      },
      {
        img: Irritacion,
        txt: 'Irritación de ojos, nariz y garganta'
      },
      {
        img: SistemaInmunologico,
        txt: 'Daño en el sistema inmunológico'
      },
    ]
  },
  temperatura:{
    mainImg: CO2Mide,
    content:[
      {
        img: DolorCabeza,
        txt: 'Dolor de cabeza'
      },
      {
        img: Somnolencia,
        txt: 'Somnolencia'
      },
      {
        img: Mareos,
        txt: 'Mareos'
      },
      {
        img: Asfixia,
        txt: 'Asfixia'
      },
      {
        img: Taquicardia,
        txt: 'Taquicardia'
      },
      {
        img: AlergiaPiel,
        txt: 'Enrojecimiento de la piel'
      },
      {
        img: PresionSanguinea,
        txt: 'Aumento de la presión sanguínea'
      },
      {
        img: BajoRendimiento,
        txt: 'Bajo rendimiento académico'
      },
      {
        img: Respiratorios,
        txt: 'Problemas respiratorios'
      },
    ]
  },
  humedad:{

  },
  presion:[

  ],
  pir:[

  ],
  luz:[

  ]
}

const ModalConsejos = ({
  modalConsejo,
  setModalConsejo,
  modalMide,
  estadoPromedio,
}) => {

  const { mainImg, content } = consequences[modalMide]

  return modalConsejo && (
    <AnimacionModalMedidas>
      <Overlay>
        <ContenedorModalMedicion>
          <CerrarModalStyle
            medicioncerrar={modalMide}
            onClick={()=>setModalConsejo(false)}
          >
            ✖
          </CerrarModalStyle>
          <MainImgModal>
            <img src={mainImg} alt="medicion" />
          </MainImgModal>
          <FuentesTitle>
            Consecuencias
          </FuentesTitle>
          <ConsecuenciasGrid>
            {
              content.map(elem=>(
                <div>
                  <ImgModal>
                    <img src={elem.img} alt="medicion" />
                  </ImgModal>
                  <p>{elem.txt}</p>
                </div>
              ))
            }
          </ConsecuenciasGrid>
          
        </ContenedorModalMedicion>
      </Overlay>
    </AnimacionModalMedidas>
  )
  return (
    <>
      {modalConsejo && (
        <AnimacionModalMedidas>
          <Overlay>
            <ContenedorModalMedicion>
              <CerrarModalStyle
                medicioncerrar={modalMide}
                onClick={()=>setModalConsejo(false)}
              >
                ×
              </CerrarModalStyle>
              {modalMide === "co2" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={Co2Consejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={Co2Consejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={Co2Consejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Emisiones ideales de CO2</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Empieza a utilizar bombillas LED</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Apagar los dispositivos sin usar</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Las emisiones generadas son las ideales
                        para cualquier ambiente cerrado. Evita molestias en tus
                        trabajadores y mantén el buen rendimiento de tus
                        espacios ventilando constantemente y utilizando plantas
                        interiores.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        Las bombillas normales generan un alto porcentaje de
                        CO2. Para mejorar estos niveles, comienza cambiando la
                        iluminación de tu espacio. Instala bombillas LED, las
                        cuales ayudan a reducir las emisiones hasta un 40%.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        El consumo fantasma de dispositivos eléctricos llega a
                        producir altas emisiones. Esto se puede solucionar
                        mediante el uso de interruptores que permitan apagar y
                        encender los dispositivos que no se están utilizando.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "temperatura" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={temperaturaConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={temperaturaConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={temperaturaConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#FEBC2D">NIVEL BAJO</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#57D2A9">NIVEL NORMAL</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL ALTO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Tomar líquidos calientes</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Temperatura ideal del ambiente</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Utilice ventiladores en el techo</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        Ante los bajos niveles de temperatura, se pueden generar
                        algunos problemas respiratorios y cardiovasculares en
                        los trabajadores. Una medida de prevención es la ingesta
                        de líquidos calientes y la disminución del consumo de
                        café.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Las temperatura del ambiente es el
                        adecuado para el confort y buen rendimiento de los
                        trabajadores. Si usas ventilación artificial evita
                        apagarlo y encenderlo constantemente para que los
                        niveles se mantengan ideales.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Una gran opción para reducir los niveles térmicos es
                        utilizar ventiladores, de preferencia los colocados en
                        el techo. Estos favorecen el movimiento del aire y
                        además tienen un bajo consumo energético.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "humedad" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={humedadConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={humedadConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={humedadConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#FEBC2D">NIVEL SECO</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#57D2A9">NIVEL NORMAL</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">HUMEDAD ALTA</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Colocar plantas en los ambientes</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Nivel de humedad ideal</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Mantén ventilado tu espacio</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        La productividad de las personas disminuye cuando hace
                        demasiado calor en una oficina. El cuerpo se
                        sobrecalienta y la concentración disminuye. El contar
                        con plantas ayudan a refrescar el ambiente y aportan
                        otros beneficios.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! La humedad es la adecuada y hace posible
                        que los colaboradores no sufran de algún problema de
                        salud en un futuro. Trata de utilizar siempre medios
                        naturales para mantener estos niveles y evita el uso de
                        humificadores.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Las emisiones generadas no son las ideales para
                        cualquier ambiente. Evita molestias y mantén un buen
                        rendimiento de tus trabajadores con una constante
                        ventilación. La forma más fácil y rápida es abriendo y
                        cerrando puertas o ventanas.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "pm" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={PM25Consejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={PM25Consejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={PM25Consejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Cantidad de PM2.5 excelente</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Limpieza del polvo</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && <BoxConsejo>Control del moho</BoxConsejo>}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! La cantidad de PM2.5 en el ambiente es el
                        ideal para decir que se tiene una buena calidad de aire.
                        Por ello realizar siempre una correcta limpieza en los
                        distintos espacios ayuda a mantener estos niveles.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        Use un trapeador, un paño húmedo para limpiar los
                        espacios con presencia de polvo. Eliminar estas pequeñas
                        partículas del ambiente pueden ayudar a limitar las
                        emisiones de material particulado y mejorar la calidad
                        del aire.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Para controlar el lento crecimiento del moho se debe
                        controlar la humedad del ambiente. Estas regulaciones
                        han ayudado a mantener bajo control la contaminación del
                        aire y mejorar la calidad de vida.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "pm10" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={PM10Consejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={PM10Consejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={PM10Consejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Cantidad de PM10 excelente</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Limpieza de los ambientes</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && <BoxConsejo>Control del moho</BoxConsejo>}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! La cantidad de PM10 es el ideal para decir
                        que se tiene una buena calidad de aire. Se debe ventilar
                        y limpiar siempre para evitar el ingreso y acumulación
                        de partículas generadas por la construcción o el humo del
                        cigarrillo.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        La PM al aire libre, generada por la construcción, por
                        ejemplo, ingresa a los edificios a través de la
                        ventilación natural. Realizar una buena limpieza de los
                        distintos ambientes es lo ideal para evitar la inhalación
                        de estas partículas.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        La principal fuente de PM10 se da por el humo del tabaco.
                        Además el fumar en un espacio cerrado provoca un incremento
                        notable de los niveles particulados en comparación a cuando
                        se realiza al aire libre.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "tvoc" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={tvocConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={tvocConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={tvocConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>
                      Regular el uso de químicos de limpieza
                    </BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>
                      Regular el uso de químicos de limpieza
                    </BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Mantener limpio muebles y alfombras</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Los niveles son los adecuados para los
                        espacios cerrados. Mantente siempre atento a ellos y
                        controla el uso de ciertos productos que puedan
                        incrementar sus niveles como los desinfectantes y
                        químicos de limpieza.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        Las fuentes típicas de TVOC en interiores como los
                        agentes de limpieza, desinfectantes, ambientadores,
                        deshumidificadores y más. Son sustancias químicas
                        orgánicas que al ser utilizadas en gran proporción
                        contaminan el aire.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Encontramos como fuente de contaminación del aire por
                        TVOC a muebles y alfombras, por ello mantener una
                        constante limpieza de estos espacios disminuye sus
                        niveles, la cual puede afectar de manera continua a la
                        salud humana.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "hcho" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={HCHOConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={HCHOConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={HCHOConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Emisiones de HCHO ideales</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Utilizar pinturas sin metanal</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Uso de madera limitado</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Los niveles son los adecuados para los
                        espacios cerrados. Mantente siempre atento a ellos y
                        controla el uso de ciertos productos que contengan
                        químicos que incrementen estos niveles por ejemplo
                        algunos tipos de pintura.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        El metanal es un material químico utilizado para
                        procesos de producción industrial como barnices y
                        pinturas. Este químico en grandes cantidades genera
                        cierta contaminación del aire en espacios cerrados.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Muchos materiales que contienen formaldehído como la
                        madera tanto para distintos acabados como para el
                        recubrimiento de suelos puede provocar durante mucho
                        tiempo la contaminación del aire respirable debido a la
                        liberación de gases.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "ozono" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={ozonoConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={ozonoConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={ozonoConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">NIVEL EXCELENTE</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#FEBC2D">NIVEL CONTAMINADO</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL MALO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Emisiones de Ozono ideales</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Reduce el uso de las fotocopiadoras</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Apagar los purificadores de aire</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Sigue manteniendo estos niveles de ozono
                        en los ambientes de trabajo. Evita usar en exceso
                        dispositivos eléctricos que lo emitan y trata de
                        mantenerlos desconectados sino se están usando.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        Al utilizar estos dispositivos se ha demostrado que es
                        una de las principales fuentes que generan ozono en el
                        ambiente. Reducir su uso solo en determinados horarios
                        puede ser de gran ayuda para disminuir estos niveles.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Altos niveles de ozono pueden generar irritación ocular
                        y agravar enfermedades respiratorias crónicas. Utilizar
                        los purificadores de aire no ayuda mucho, ya que
                        incrementan las concentraciones de ozono interior.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "presion" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={presionConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={presionConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={presionConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#FEBC2D">BAJA PRESIÓN</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#57D2A9">NIVEL NORMAL</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">ALTA PRESIÓN</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Adaptación gradual al cambio</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Presión barométrica adecuada</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>Atenta a estos altos niveles</BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        Cuando el nivel es bajo se reduce la concentración del
                        oxígeno que respiramos, lo cual produce dolor de cabeza
                        y fatiga. En el caso de lograr una preparación ante este
                        cambio, no nos veremos tan afectados en nuestra salud.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Los niveles son los adecuados para la
                        salud de los trabajadores. No existirá reducción o
                        saturación del oxígeno que respiramos. Además ayuda a
                        que todos puedan realizar sus actividades con total
                        normalidad.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Cuando se incrementa la presión la saturación del
                        oxígeno se eleva por encima del 98%, llegando al 100%. A
                        corto plazo, el cuerpo es capaz de tolerarlo. Sin
                        embargo, a largo plazo se generan problemas de toxicidad
                        por oxígeno.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "pir" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={pirConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={pirConsejo1} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#57D2A9">ESTADO OCUPADO</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#f00d0d">ESTADO DESOCUPADO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Mantente en actividad</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Hacer pequeñas pausas</BoxConsejo>
                  )}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Mantenerte ocupado y estar en movimiento
                        cada cierto tiempo es ideal para evitar posibles
                        problemas en la circulación y tensión muscular. Así que
                        evita el sedentarismo en los trabajadores.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        Es aconsejable hacer pequeñas pausas para moverse tanto
                        como sea posible. Esto ayuda a estimular la circulación
                        y a aliviar la tensión muscular. Es conveniente estar en
                        movimiento activo durante unos cinco minutos.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
              {modalMide === "luz" && (
                <>
                  <ImgModal>
                    {estadoPromedio === 0 && (
                      <img src={luzConsejo0} alt="medicion" />
                    )}
                    {estadoPromedio === 1 && (
                      <img src={luzConsejo1} alt="medicion" />
                    )}
                    {estadoPromedio === 2 && (
                      <img src={luzConsejo2} alt="medicion" />
                    )}
                  </ImgModal>
                  {/* Estado */}
                  {estadoPromedio === 0 && (
                    <TextConsejo color="#FEBC2D">NIVEL BAJO</TextConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <TextConsejo color="#57D2A9">NIVEL NORMAL</TextConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <TextConsejo color="#f00d0d">NIVEL ALTO</TextConsejo>
                  )}
                  {/* Consejo Resumen */}
                  {estadoPromedio === 0 && (
                    <BoxConsejo>Pintar con colores claros</BoxConsejo>
                  )}
                  {estadoPromedio === 1 && (
                    <BoxConsejo>Nivel de iluminación ideal</BoxConsejo>
                  )}
                  {estadoPromedio === 2 && (
                    <BoxConsejo>
                      Iluminar bien los espacios de trabajo
                    </BoxConsejo>
                  )}
                  {/* Consejo */}
                  {estadoPromedio === 0 && (
                    <Medicion>
                      <p>
                        Los niveles bajos de luz generan fatiga visual, lo que
                        suele ayudar a dar mayor iluminación a los espacios de
                        un ambiente es el pintar las paredes con color blanco o
                        tonos claros, esto da mayor luz natural y artificial.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 1 && (
                    <Medicion>
                      <p>
                        ¡Felicidades! Los niveles de iluminación del ambiente
                        son los adecuados. Evita el cansancio visual de los
                        trabajadores y utiliza siempre luces claras posicionadas
                        correctamente y en los lugares ideales.
                      </p>
                    </Medicion>
                  )}
                  {estadoPromedio === 2 && (
                    <Medicion>
                      <p>
                        Hay demasiada luz, más brillante que aquella a la que el
                        ojo puede adaptarse. Se puede corregir colocando las
                        luces artificiales más arriba de lo usual y con
                        protección o evitar que el sol brille directamente sobre
                        el espacio de trabajo.
                      </p>
                    </Medicion>
                  )}
                </>
              )}
            </ContenedorModalMedicion>
          </Overlay>
        </AnimacionModalMedidas>
      )}
    </>
  );
};

export default ModalConsejos;
