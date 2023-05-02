
import { types } from "../../types";

export default (state, action) => {
    switch (action.type) {
        /*Filtrar salas co2 */
        case types.FILTRAR_SALAS_CO2_SEARCH:
            return {
                ...state,
                searchSalas: action.payload,
            }
        case types.FILTAR_SALAS_CO2_ORDER_NUMBER:
            return {
                ...state,
                order_numberSalas: "true",
            }
        case types.FILTAR_SALAS_CO2_ORDER_NAME:
            return {
                ...state,
                order_nameSalas: "true",
            }
        case types.FILTRAR_SALAS_CO2_RESET:
            return {
                ...state,
                searchSalas: "",
                order_numberSalas: "",
                order_nameSalas: "",
            }
        /*Filtrar Indicadores */
        case types.FILTRAR_INDICADORES_FECHA:
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
            }
        case types.FILTRAR_INDICADORES_HORA:
            return {
                ...state,
                horaIndicadores: action.payload,
            }
        case types.FILTRAR_INDICADORES_ESTADO:
            return {
                ...state,
                estadoIndicadores: action.payload,
            }
        case types.FILTRAR_INDICADORES_RESET: 
            return {
                ...state,
                fechaIndicadores: "",
                horaIndicadores: "",
                estadoIndicadores: "",
            }
        default:
            return state;
    }
}