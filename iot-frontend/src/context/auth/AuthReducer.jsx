import { types } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case types.LOGIN_EXITOSO:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado: true,
                token: action.payload.token
            }
        case types.LOGIN_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null, 
                autenticado: false,
                mensaje: action.payload,
                errorLogin: true,
                usuario: null,
            }
        case types.CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null, 
                autenticado: false,
                usuario: null,
                mensaje: null,
                startDate: null
            }
        case types.RESET__ERROR:
            return {
                ...state,
                errorLogin: false,
                mensaje: null,
            }
        case types.OBTENER_USUARIO: 
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
            }
        case types.SET_START_DATE:
            return{
                ...state,
                startDate: action.payload
            }
        /* Rutas */
        case types.RUTA_ACTUAL:
            return {
                ...state,
                ruta: action.payload
            }
        case types.RUTA_RESET:
            return {
                ...state,
                ruta: null
            }
        
        default:
            return state;
    }
}