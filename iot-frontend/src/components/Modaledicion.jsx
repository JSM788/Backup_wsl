import React from "react";
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
import {
  Overlay,
  CerrarModalStyle,
  ContenedorModalMedicion,
  Medicion,
  ImgModal,
  FuentesTitle,
  FuentesFlex,
} from "../styles/ModalStyle";
import { AnimacionModalMedidas } from "../animation/Animacion";
import CombustionMotores from "../assets/svg/consejos/co2/motores.svg"
import RespiracionHumana from "../assets/svg/consejos/co2/respirar.svg"
import Metabolismo from "../assets/svg/consejos/co2/niños.svg"
import Cigarrillos from "../assets/svg/consejos/pm2/cigarrillos.svg"
import Cocinas from "../assets/svg/consejos/pm2/cocinas.svg"
import Autopistas from "../assets/svg/consejos/pm2/autopistas.svg"
import Moho from "../assets/svg/consejos/pm10/Moho.svg"
import Polvo from "../assets/svg/consejos/pm10/polvo.svg"
import Cenizas from "../assets/svg/consejos/pm10/cenizas.svg"
import MaterialesConstruccion from "../assets/svg/consejos/tvoc/construccion.svg"
import EquiposMantenimiento from "../assets/svg/consejos/tvoc/mantenimiento.svg"
import CuidadoPersonal from "../assets/svg/consejos/tvoc/cuidado_personal.svg"
import Muebles from "../assets/svg/consejos/tvoc/muebles.svg"
import ProductosLimpieza from "../assets/svg/consejos/tvoc/productos-de-limpieza.svg"
import Medicamentos from "../assets/svg/consejos/hcho/medicamentos.svg"
import ArticulosMadera from "../assets/svg/consejos/hcho/de-madera.svg"
import RopaPlanchado from "../assets/svg/consejos/hcho/planchado_duradero.svg"
import Chimeneas from "../assets/svg/consejos/hcho/chimeneas.svg"
import Preservantes from "../assets/svg/consejos/hcho/preservante.svg"
import Trafico from "../assets/svg/consejos/o3/trafico.svg"
import Centrales from "../assets/svg/consejos/o3/centrales_termicas.svg"
import Disolventes from "../assets/svg/consejos/o3/disolventes.svg"

const modalContent = {
  co2: {
    img: CO2Mide,
    mainContent: [`
      El CO2 es el indicador de riesgo de contagio y 
      transmisión de virus para el COVID-19, regulado 
      por el Minsa en su anexo 10.
    `,
    `
      El CO2 indica el grado de ventilación que tiene un 
      espacio, se estima que el 1 % del aire que se respira 
      ya fue respirado por otra persona, las personas exhalan 
      CO2 por lo que la acumulación de este gas es un buen 
      indicador de la acumulación de aerosoles que podrían 
      transmitir la COVID-19.`
    ],
    src:[
      {
        img: CombustionMotores,
        txt: 'Combustión de motores'
      },
      {
        img: RespiracionHumana,
        txt: 'Respiración humana (aglomeración de personas)'
      },
      {
        img: Metabolismo,
        txt: 'Los niños producen más CO2 debido a su metabolismo y actividad'
      },
    ]
  },
  pm: {
    img: PMMide,
    mainContent: [`
      El PM 2.5 es el causante de reducir en casi 5 
      años la expectativa de vida en Lima, es una mezcla 
      de partículas sólidas y gotas líquidas que se 
      encuentran en el aire, que es capaz de penetrar 
      profundamente en los pulmones debido a su reducido 
      tamaño 2.5 micras.`
    ],
    src:[
      {
        img: Cigarrillos,
        txt: 'Cigarrillos'
      },
      {
        img: Cocinas,
        txt: 'Cocinas a gas ó leña-carbón'
      },
      {
        img: Autopistas,
        txt: 'Autopistas concurridas'
      },
    ]
  },
  pm10: {
    img: PM10Mide,
    mainContent: [`
      El PM 10, es una mezcla de partículas sólidas y 
      gotas líquidas que se encuentran en el aire, estás 
      partículas contaminan y deterioran el mismo.
    `
    ],
    src:[
      {
        img: Moho,
        txt: 'Lugares con moho'
      },
      {
        img: Polvo,
        txt: 'Acumulación de polvo'
      },
      {
        img: Cenizas,
        txt: 'Cenizas de cocinas, chimeneas, otros.'
      },
    ]
  },
  tvoc: {
    img: TVOCMide,
    mainContent: [`
      Los compuestos orgánicos volátiles son sustancias 
      volátiles que se evaporan ligeramente desde temperaturas 
      bajas, es decir se "volatilizan" en estado gaseoso, con 
      lo cual contaminan el aire.
    `
    ],
    src:[
      {
        img: MaterialesConstruccion,
        txt: 'Materiales de construcción'
      },
      {
        img: EquiposMantenimiento,
        txt: 'Equipos de mantenimiento'
      },
      {
        img: CuidadoPersonal,
        txt: 'Artículos de cuidado personal'
      },
      {
        img: Cigarrillos,
        txt: 'Humo de tabaco'
      },
      {
        img: Muebles,
        txt: 'Muebles y alfombras'
      },
      {
        img: ProductosLimpieza,
        txt: 'Productos de limpieza: disolventes, quitamanchas, etc.'
      },
    ]
  },
  hcho: {
    img: HCHOMide,
    mainContent: [`
      Es un producto químico que se utiliza en la creación 
      de distintos productos desde ropa, plásticos, papel 
      hasta productos de belleza y otros. También es usado 
      como como bactericida o conservante. Es considerado 
      altamente cancerígeno.
    `
    ],
    src:[
      {
        img: Medicamentos,
        txt: 'Antisépticos y medicamentos'
      },
      {
        img: ArticulosMadera,
        txt: 'Fabricación de artículos de madera'
      },
      {
        img: RopaPlanchado,
        txt: 'Ropa de planchado duradero'
      },
      {
        img: Chimeneas,
        txt: 'Estufas de gas, chimeneas'
      },
      {
        img: Cigarrillos,
        txt: 'Cigarrillos y otros productos de tabaco'
      },
      {
        img: Preservantes,
        txt: 'Preservante de uso en hospitales y laboratorios'
      },
    ]
  },
  ozono: {
    img: OzonoMide,
    mainContent: [`
      El ozono es un gas incoloro e inodoro producido por 
      emisiones provenientes de la industria y del tránsito 
      con condiciones meteorológicas específicas.
    `
    ],
    src:[
      {
        img: Trafico,
        txt: 'Tráfico vehicular'
      },
      {
        img: Centrales,
        txt: 'Centrales térmicas de electricidad'
      },
      {
        img: Disolventes,
        txt: 'Uso de productos con disolventes orgánicos'
      },
    ]
  },
  temperatura: {
    img: TemperaturaMide,
    mainContent: [`
      Medimos la temperatura del aire. Esto nos sirve para 
      conocer y controlar el nivel térmico de un ambiente, 
      el cual no debe ser ni demasiado alto ni muy bajo y 
      que no genere incomodidad.
    `,
    `
      Además cuando la temperatura 
      no es la adecuada se pueden tener más problemas de salud, 
      debido a que en las altas temperaturas aumentan los niveles 
      de ozono y otros contaminantes del aire que agravan muchas 
      enfermedades cardiovasculares y respiratorias.
    `
    ],
  },
  humedad: {
    img: HumedadMide,
    mainContent: [`
      Mide la cantidad de vapor de agua que contiene el aire, 
      necesaria para evaluar nuestra comodidad térmica. Cuanto 
      más alto sea el porcentaje, más calor tendremos; y cuando 
      es bajo, hace más frío.
    `,
    ` 
      También afecta la salud cuando está por debajo del mínimo 
      y por encima del máximo, es decir, cuando el aire está muy 
      seco, sentimos incomodidad al respirar. Y el exceso de 
      humedad acelera la proliferación de microorganismos, que 
      causan alergias.
    `
    ],
  },
  presion: {
    img: PresionMide,
    mainContent: [`
      La presión barométrica es de gran utilidad para medir la
      presión que ejerce la atmósfera sobre la tierra al nivel del
      mar.
    `,
    `
      Todos los cuerpos (vivos o no) emiten una cierta cantidad de 
      energía infrarroja, mayor cuanto mayor es su temperatura. 
      Los dispositivos PIR disponen de un sensor o pieza eléctrica 
      capaz de captar esta radiación y convertirla en una señal 
      eléctrica.
    `
    ],
  },
  pir: {
    img: PIRMide,
    mainContent: [`
      El sensor de movimiento o Sensor PIR mide la luz infrarroja (IR) 
      radiada de los objetos situados en su campo de visión, son 
      dispositivos para la detección de movimiento.
    `,
    `
      Todos los cuerpos (vivos o no) emiten una cierta cantidad de
      energía infrarroja, mayor cuanto mayor es su temperatura. Los
      dispositivos PIR disponen de un sensor o pieza eléctrica capaz
      de captar esta radiación y convertirla en una señal eléctrica.
    `
    ],
  },
  luz: {
    img: LuzMide,
    mainContent: [`
      Mide específicamente la intensidad con que la luminosidad
      aparece al ojo humano. Un lux es la unidad de medida de la
      iluminancia.
    `,
    `
      Si los niveles son demasiado bajos, forzar la vista por la
      poca iluminación puede producir vista cansada o resequedad
      de los ojos. Lo mismo sucede si la iluminación es demasiado
      fuerte, el deslumbramiento evita que se preste atención a
      los detalles, y cualquier error podría resultar en un
      accidente grave o fatal.
    `
    ],
  },
}

const Modaledicion = ({ modal, setModal, modalMide }) => {
  const CerrarModal = () => {
    setModal(false);
  };

  const { img, mainContent, src } = modalContent?.[modalMide]

  return (
    <>
      {modal && (
        <AnimacionModalMedidas>
          <Overlay>
            <ContenedorModalMedicion>
              <CerrarModalStyle
                medicioncerrar={modalMide}
                onClick={CerrarModal}
              >
                ✖
              </CerrarModalStyle>
              <ImgModal>
                <img src={img} alt="medicion" />
              </ImgModal>
              <Medicion>
                {
                  mainContent?.map(elem=>(
                    <p>{elem}</p>
                  ))
                }
              </Medicion>
              { src && (
                <FuentesTitle>
                  Fuentes
                </FuentesTitle>
              )}
              <FuentesFlex>
                {
                  src?.map(elem=>(
                    <div>
                      <img src={elem.img}/>
                      <p>{elem.txt}</p>
                    </div>
                  ))
                }
              </FuentesFlex>
            </ContenedorModalMedicion>
          </Overlay>
        </AnimacionModalMedidas>
      )}
    </>
  );
};

export default Modaledicion;
