import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import { AuthContext } from "../context/auth/AuthProvider";

const useFilters = () =>{

    const {
        rooms
    } = useContext(AuthContext);
    

    const [sedes, setSedes] = useState([])
    const [ambientes, setAmbientes] = useState([])
    const [salas, setSalas] = useState([])
    const [currentRoom, setCurrentRoom] = useState({
        id: "",
        name: null,
        headquarter_id: "",
        device_assigned: null
    })
    
    const controller = new AbortController()
    const signal = controller.signal

    const { id } = useParams()

    useEffect(()=>{
        getSedes()
        getSalas(id)
        getCurrentHeadquarter()
        return ()=>{
            controller.abort()
        }
    },[id])

    const getCurrentHeadquarter = async () =>{
        !id ? setCurrentRoom({
            id: null,
            name: "",
            headquarter_id: null,
            device_assigned: null
        }) : await clienteAxiosValhalla.get(`/sensors/api/room/${id}`,{
            signal: signal
        })
        .then(res=> setCurrentRoom(res.data))

    }

    const getSedes = async() => {
        const res = await clienteAxiosValhalla.get(`/enterprise/api/enterprise/headquearters`,{
            signal: signal
        })
        setSedes(res.data?.results || []);
    }

    const getAmbientes = async(id)=>{
        const res = await clienteAxiosValhalla.get(`/sensors/api/headquarters/${id}/ambient-list`,{
            signal: signal
        });
        setAmbientes(res.data?.results || []);
    }

    const getSalas = async(id)=>{
        const res = await clienteAxiosValhalla.get(`/enterprise/api/enterprise/rooms?headquarters=${id}`,{
            signal: signal
        });
        console.log(res.data)
        setSalas(res.data?.results || []);
    }

    const getSalasFiltered = async (enterpriseId, search, sede, estado, page = 1) =>{
        const res = await clienteAxiosValhalla.get(
            `/sensors/api/enterprise/${enterpriseId}/salas?page=${page}&search=${search}&headquarter=${sede}&status=${estado}`
        );
        return res.data
    }

    return{
        sedes,
        ambientes,
        salas,
        currentRoom,
        getSedes,
        getAmbientes,
        getSalas,
        getSalasFiltered
    }
}

export default useFilters;