import { useContext, useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import HeaderFilter from "../../components/HeaderFilter"
import { AuthContext } from "../../context/auth/AuthProvider"
import useFilters from "../../hooks/useFilters"
import { TimeBox } from "../../styles/IndicadoresStyle"
import { BoxSelectAmbiente, SelectIndicadorAmbiente } from "../../styles/MonitoreoStyle"
import { today } from "../../utils/todayFilter"

const AlertasPage = () => {

  const { id } = useParams()

  const [filtros, setFiltros] = useState({
    sede: "",
    sala: id || "",
    fecha: today,
    option: "0"
  });

  const { sede, sala, fecha, option } = filtros

  const { salas, sedes, currentRoom } = useFilters(sede)

  const { startDate } = useContext(AuthContext)

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const afterSlash = location.pathname.split('/').pop()

  const pageChange = (id) => {
    navigate(`/sistema/alertas/${id}`)
  }

  return (
    <>
      <HeaderFilter
        sedes={sedes}
        salas={salas}
        currentRoom={currentRoom}
        filtros={filtros}
        handleChange={handleChange}
        pageChange={pageChange}
        displayName
      >
        <TimeBox style={{ gap: 4 }}>
          <input
            type="date"
            name="fecha"
            onKeyDown={(e) => e.preventDefault()}
            min={startDate || '2022-09-23'}
            value={fecha}
            onChange={handleChange}
          />
        </TimeBox>
        { sala && (
          <BoxSelectAmbiente>
            <SelectIndicadorAmbiente
              monitoreo="196px"
              name="option"
              id="option"
              value={filtros.option}
              onChange={handleChange}
            >
              <option value="">Todas las alertas</option>
              <option value={true}>Revisadas</option>
              <option value={false}>No revisadas</option>
            </SelectIndicadorAmbiente>
          </BoxSelectAmbiente>
        )}
      </HeaderFilter>
      <Outlet context={[fecha, option]} />
    </>
  )
}

export default AlertasPage