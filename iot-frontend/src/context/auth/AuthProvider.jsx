import { createContext, useReducer } from "react";
import { clienteAxiosValhalla } from "../../config/axios";
import { Authorization } from "../../config/tokenAuth";
import { types } from "../../types";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        startDate: null,
        mensaje: null,
        cargando: true,
        errorLogin: false,
        ruta: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const iniciarSesion = async (datos) => {

        try {   
            const respuesta = await clienteAxiosValhalla.post('/account/api/token/',datos)
            // console.log(respuesta); 
            dispatch({
                type: types.LOGIN_EXITOSO,
                payload: respuesta.data
            })
            //Obtener el usuario 
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.non_field_errors[0]);
            dispatch({
                type: types.LOGIN_ERROR,
                payload: error.response.data.non_field_errors[0]
            })
        }
    }

    const cerrarSesion =  () => {
        dispatch({
            type: types.CERRAR_SESION
        })
    }

    const ResetError = () => {
        setTimeout(()=> {
            dispatch({
                type: types.RESET__ERROR,
            })
        },5000)
    }

    const setStartDate = (date) => {
        dispatch({
            type: types.SET_START_DATE,
            payload: date
        })
    }

    const usuarioAutenticado = async () => {

        const token = localStorage.getItem('token');
        
        if (token) {
            //Funcion para enviar el token por header
            Authorization(token)
            // console.log(token);
        }

        try {
            const respuesta = await clienteAxiosValhalla.get('/account/api/detail');
            // console.log(respuesta);
            dispatch({
                type: types.OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: types.LOGIN_ERROR
            })
        }
    }
    /* Rutas*/
    const rutaActual = (ruta) => {
        dispatch({
            type: types.RUTA_ACTUAL,
            payload: ruta
        })
    }
    const rutaReset = () => {
        dispatch({
            type: types.RUTA_RESET
        })
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            iniciarSesion,
            cerrarSesion,
            ResetError,
            usuarioAutenticado,
            setStartDate,
            rutaActual,
            rutaReset
            }} >
            {children}
        </AuthContext.Provider>
        )
}