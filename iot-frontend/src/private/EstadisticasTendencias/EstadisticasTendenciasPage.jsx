import { useEffect } from "react"
import { useContext, useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import HeaderFilter from "../../components/HeaderFilter"
import { AuthContext } from "../../context/auth/AuthProvider"
import useFilters from "../../hooks/useFilters"
import { HeaderFilterDateButton } from "../../styles/HeaderStyle"
import { TimeBox } from "../../styles/IndicadoresStyle"
import { today } from "../../utils/todayFilter"

const EstadisticasTendenciasPage = () =>{
    
    const { id } = useParams()

    const [filtros, setFiltros] = useState({
        sede: "",
        sala: id || null,
        fechaInicio: today,
        fechaFinal: today
    });

    const { sede, sala, fechaInicio, fechaFinal } = filtros

    const { 
        sedes, 
        salas,
        currentRoom,
        getSalas
    } = useFilters(sala)

    const todaySetter = () =>{
        setFiltros({
            ...filtros,
            fechaInicio: today,
            fechaFinal: today
        })
    }

    useEffect(()=>{
        getSalas(sede)
    },[sede])

    const handleChange = (e) => {
        setFiltros({
            ...filtros,
            [e.target.name]: e.target.value,
        });
    }

    const { startDate } = useContext(AuthContext)

    const navigate = useNavigate()

    const pageChange = (id) =>{
        navigate(`/sistema/estadisticas/${id}`)
    }

    return(
        <>
            <HeaderFilter
                sedes={sedes}
                salas={salas}
                filtros={filtros}
                currentRoom={currentRoom}
                handleChange={handleChange}
                pageChange={pageChange}
                displayName
            >
                <TimeBox style={{gap: 4}}>
                    <input
                        type="date"
                        name="fechaInicio"
                        onKeyDown={(e) => e.preventDefault()}
                        min={startDate || '2022-09-23'}
                        max={fechaFinal}
                        value={fechaInicio}
                        onChange={handleChange}
                    />
                    <input 
                        type="date" 
                        name="fechaFinal"
                        onKeyDown={(e) => e.preventDefault()}
                        min={fechaInicio}
                        max={today}
                        value={fechaFinal} 
                        onChange={handleChange} 
                    />
                </TimeBox>
                <HeaderFilterDateButton act={fechaInicio===today} onClick={()=>todaySetter()}>HOY</HeaderFilterDateButton>
            </HeaderFilter>
            <Outlet context={[fechaInicio, fechaFinal, currentRoom]}/>
        </>
    )
}

export default EstadisticasTendenciasPage