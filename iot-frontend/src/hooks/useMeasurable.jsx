import { useEffect } from "react"
import { useState } from "react"
import { clienteAxiosValhalla } from "../config/axios"

const useMeasurables = (id) =>{

    const [measurables, setMeasurables] = useState()

    const controller = new AbortController()
    const signal = controller.signal

    useEffect(()=>{
        getMeasurables()
        return ()=>{
            controller.abort()
        }
    },[id])

    const getMeasurables = async () =>{
        const { data } = await clienteAxiosValhalla(`/sensors/api/room/${id}/measure-indicators`,{
            signal: signal
        })
        console.log(data)
        setMeasurables(data)
    }

    return{
        measurables,
    }
} 

export default useMeasurables