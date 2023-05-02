import { useEffect, useState, useContext } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Dispositivo from "../assets/co2Dispositivo.jpeg";
import { Loading } from "../components/Loading";

import { clienteAxiosValhalla } from "../config/axios";
import { EmpresaContext } from "../context/empresa/EmpresaProvider";
import { ModalFechaCo2 } from "../components/ModalFechaCo2";
import { BoxDerecha, BoxIzquierda, BoxIzquierdaCo2, BoxSensor, Contenedor2, ContenedorSensor, Conternedor, DatosBox, DispositivoBox, DispositivoBoxCo2, DispositivoDataCo2, FiltrarBtn, LinkMagnitudes, Magnitudes, SpanCo2 } from "../styles/DetallesStyle";

import { ContainerAnimationDetalles } from "../animation/Animacion" 

export const DetallesCO2 = () => {
  const [modalFiltrar, setModalFiltrar] = useState(false);
  const { FiltrarMonitoreoCo2FechaReset } = useContext(EmpresaContext);

  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const urlActual = location.pathname;

  const modalFiltrarButton = () => {
    setModalFiltrar(true);
  }

  // console.log(items);

  useEffect(() => {
    const getData = async () => {
      const res = await clienteAxiosValhalla.get(
        `/sensors/api/headquarters/sensor/${id}`
      );
      setItems(res.data);
      setLoading(true);
    };
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <>
        <ContainerAnimationDetalles>
        <ModalFechaCo2 modalFiltrar={modalFiltrar} setModalFiltrar={setModalFiltrar}  />
          <Conternedor>
          <ContenedorSensor>
            <BoxSensor>
              <h3>{items.local_name} | <span>{items.dev_eui}</span> </h3>
              <p>
                ESTADO : &nbsp;
                <SpanCo2 className={items.wind_status}>
                  {items.wind_status.toUpperCase()}
                </SpanCo2>
              </p>
            </BoxSensor>
            <Magnitudes>
                <LinkMagnitudes
                  to=""
                  className={`${
                    urlActual === `/dashboard/monitoreoAmbiental/detalles/${id}`
                      ? "urlActual"
                      : null
                  }`}
                >
                  Niveles de CO<sub>2</sub>
                </LinkMagnitudes>
                <LinkMagnitudes
                  to="temperatura"
                  className={`${
                    urlActual ===
                    `/dashboard/monitoreoAmbiental/detalles/${id}/temperatura`
                      ? "urlActual"
                      : null
                  }`}
                >
                  Temperatura
                </LinkMagnitudes>
                <LinkMagnitudes
                  to="humedad"
                  className={`${
                    urlActual ===
                    `/dashboard/monitoreoAmbiental/detalles/${id}/humedad`
                      ? "urlActual"
                      : null
                  }`}
                >
                  Humedad
                </LinkMagnitudes>
                {/* <div className="Co2__navegador">
                    <i className="fas fa-filter"></i>&nbsp;&nbsp;Filtrar
                </div> */}
                <FiltrarBtn>
                  <button onClick={modalFiltrarButton}>
                    <i className="fas fa-filter"></i>&nbsp;&nbsp;Filtrar
                  </button>
                </FiltrarBtn>
            </Magnitudes>
          </ContenedorSensor>
          <Contenedor2>
            <BoxIzquierdaCo2>
              <DispositivoBoxCo2>
                <img src={Dispositivo} alt="dispositivo" />
              </DispositivoBoxCo2>
              {/* <div className="contenedorDatos">
                <h4>
                  Código de sala: <span>{items.local_code}</span>
                </h4>
                <h4>
                  Código del sensor: <span> {items.dev_eui} </span>
                </h4>
              </div> */}
              <DispositivoDataCo2>
                  <p>
                    Código de sala: <span>{items.local_code}</span>
                  </p>
                  <p>
                    Código del sensor:: <span>{items.dev_eui}</span>
                  </p>
                </DispositivoDataCo2>
            </BoxIzquierdaCo2>
            <BoxDerecha>
              <Outlet />
            </BoxDerecha>
          </Contenedor2>
          </Conternedor>
          </ContainerAnimationDetalles>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
