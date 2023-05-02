import { useState, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Sistema } from "./pages/Sistema"
import AuditoriaCo2 from "./private/AuditoriaCo2"
import IndicadoresCo2 from "./private/IndicadoresCo2"
import { ListadoSalas } from "./private/ListadoSalas"
import MonitoreoAmbiente from "./private/MonitoreoAmbiente"
import Co2Date from "./container/Co2Date"
import HCHODate from "./container/HCHODate"
import HumedadDate from "./container/HumedadDate"
import LuzDate from "./container/LuzDate"
import OzonoDate from "./container/OzonoDate"
import PIRDate from "./container/PIRDate"
import PMDate from "./container/PMDate"
import PM10Date from "./container/PM10Date"
import PresionBarametricaDate from "./container/PresionBarametricaDate"
import TemperaturaDate from "./container/TemperaturaDate"
import TVOCDate from "./container/TVOCDate"
import { AuthProvider } from "./context/auth/AuthProvider"
import { FiltrosProvider } from "./context/Filtros/FiltrosProvider"
import GlobalStyles from "./styles/GlobalStyles"
import Co2DateEstadistica from "./container/Co2DateEstadistica"
import TemperaturaDateEstadistica from "./container/TemperaturaDateEstadistica"
import HumedadDateEstadistica from "./container/HumedadDateEstadistica"
import PMDateEstadistica from "./container/PMDateEstadistica"
import PM10DateEstadistica from "./container/PM10DateEstadistica"
import TVOCDateEstadistica from "./container/TVOCDateEstadistica"
import HCHODateEstadistica from "./container/HCHODateEstadistica"
import OzonoDateEstadistica from "./container/OzonoDateEstadistica"
import PresionBarametricaDateEstadistica from "./container/PresionBarametricaDateEstadistica"
import PIRDateEstadistica from "./container/PIRDateEstadistica"
import LuzDateEstadistica from "./container/LuzDateEstadistica"
import ErrorPage from "./pages/404"
import AlertasResueltas from "./private/AlertasResueltas"
import PrivateRoutes from "./config/PrivateRoutes"
import EstadisticasTendencias from "./private/EstadisticasTendencias/EstadisticasTendencias"
import EstadisticasTendenciasIndex from "./private/EstadisticasTendencias/EstadisticasTendenciasIndex"
import EstadisticasTendenciasPage from "./private/EstadisticasTendencias/EstadisticasTendenciasPage"
import AlertasPage from "./private/Alertas/AlertasPage"
import AlertasIndex from "./private/Alertas/AlertasIndex"
import Alertas from "./private/Alertas/Alertas"

const App = () => {

  const [auth, setAuth] = useState(null);

  const token = localStorage.getItem("token");

  const authLogin = () => {
    setAuth(true);
  }
  
  const logout = () => {
    setAuth(false);
  }

  return (
    <AuthProvider>
      <FiltrosProvider>
      <GlobalStyles />
        <Routes>
        {/* Rutas Privadas */}
          <Route element={<PrivateRoutes auth={token}/>}>
            <Route path="/sistema" element={<Sistema logout={logout} />}>
              <Route index element={<ListadoSalas />} />
              <Route path="monitoreoAmbiental/:id" element={<MonitoreoAmbiente />}>
                <Route index element={<Co2DateEstadistica />} />
                <Route path="temperatura" element={<TemperaturaDateEstadistica />} />
                <Route path="humedad" element={<HumedadDateEstadistica />} />
                <Route path="pm" element={<PMDateEstadistica />} />
                <Route path="pm10" element={<PM10DateEstadistica />} />
                <Route path="tvoc" element={<TVOCDateEstadistica />} />
                <Route path="hcho" element={<HCHODateEstadistica />} />
                <Route path="ozono" element={<OzonoDateEstadistica />} />
                <Route path="presion" element={<PresionBarametricaDateEstadistica />} />
                <Route path="pir" element={<PIRDateEstadistica/>} />
                <Route path="luz" element={<LuzDateEstadistica />} />
              </Route>
              <Route path="indicadores/:id" element={<IndicadoresCo2 />}>
                <Route index element={<Co2Date />} />
                <Route path="temperatura" element={<TemperaturaDate />} />
                <Route path="humedad" element={<HumedadDate />} />
                <Route path="pm" element={<PMDate />} />
                <Route path="pm10" element={<PM10Date />} />
                <Route path="tvoc" element={<TVOCDate />} />
                <Route path="hcho" element={<HCHODate />} />
                <Route path="ozono" element={<OzonoDate />} />
                <Route path="presion" element={<PresionBarametricaDate />} />
                <Route path="pir" element={<PIRDate />} />
                <Route path="luz" element={<LuzDate />} />
              </Route>
              <Route path="estadisticas" element={<EstadisticasTendenciasPage/>}>
                <Route index element={<EstadisticasTendenciasIndex/>}/>
                <Route path=":id" element={<EstadisticasTendencias/>}/>
              </Route>
              <Route path="alertas" element={<AlertasPage/>}>
                <Route index element={<AlertasIndex />}/>
                <Route path=":id" element={<Alertas/>}/>
              </Route>
              <Route path="resueltas" element={<AlertasResueltas />}/>
              <Route path="auditoria" element={<AuditoriaCo2 />} />
            </Route>
            <Route path="404" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to="/404" />} /> 
          </Route>   
          {/* Rutas Publicas */}
          <Route path="/" element={<Login authLogin={authLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />         
        </Routes>
      </FiltrosProvider>
    </AuthProvider>
  );
};

export default App;
