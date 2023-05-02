import { createContext, useReducer } from "react";
import { types } from "../../types";
import { today } from "../../utils/todayFilter";

import FiltrosReducer from "./FiltrosReducer";

export const FiltrosContext = createContext();

export const FiltrosProvider = ({children}) => {

    const initialState = {
        /*Filtrar CO2 SALAS */
        searchSalas: "",
        order_numberSalas: "",
        order_nameSalas: "",
        /*Filtrar Indicadores */
        startDate: today,
        endDate: today,
        horaIndicadores: "",
        estadoIndicadores: "",
    }

    const [state, dispatch] = useReducer(FiltrosReducer, initialState);

    /* Filtros para salas */
    const FiltrarSalasSearch = (search) => {
        dispatch({
            type: types.FILTRAR_SALAS_CO2_SEARCH,
            payload: search
        })
    }
    const FiltrarSalaOrderNumber = () => {
        dispatch({
            type: types.FILTAR_SALAS_CO2_ORDER_NUMBER
        })
    }
    const FiltrarSalaOrderName = () => {
        dispatch({
            type: types.FILTAR_SALAS_CO2_ORDER_NAME
        })
    }
    const FiltrarSalaReset = () => {
        dispatch({
            type: types.FILTRAR_SALAS_CO2_RESET
        })
    }
    /*Filtrar Indicadores */
    const FiltrarIndicadoresFecha = (fecha) => {
        dispatch({
            type: types.FILTRAR_INDICADORES_FECHA,
            payload: fecha
        })
    }
    const FiltrarIndicadoresHora = (hora) => {
        dispatch({
            type: types.FILTRAR_INDICADORES_HORA,
            payload: hora
        })
    }
    const FiltrarIndicadoresEstado = (estado) => {
        dispatch({
            type: types.FILTRAR_INDICADORES_ESTADO,
            payload: estado
        })
    }
    const FiltrarIndicadoresReset = () => {
        dispatch({
            type: types.FILTRAR_INDICADORES_RESET
        })
    }
    return (
        <FiltrosContext.Provider value={{
            ...state,
            /*Filtros salas */
            FiltrarSalasSearch,
            FiltrarSalaOrderNumber,
            FiltrarSalaOrderName,
            FiltrarSalaReset,
            /*Filtros Indicadores */
            FiltrarIndicadoresFecha,
            FiltrarIndicadoresHora,
            FiltrarIndicadoresEstado,
            FiltrarIndicadoresReset,
        }}>
            {children}
        </FiltrosContext.Provider>
    )


}