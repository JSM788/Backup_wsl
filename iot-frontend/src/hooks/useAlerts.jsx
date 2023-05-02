import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import { download } from "../utils/downloadCsv";


const useAlerts = (indicator, offset, fecha, option=false) => {

    const [alerts, setAlerts] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [globalCount, setGlobalCount] = useState()

    const controller = new AbortController()

    const { id } = useParams()

    const AlertsPerPage = 7

    useEffect(()=>{
        setLoading(true)
        getData()
        return ()=>{
            controller.abort()
        }
    },[indicator, offset, id, fecha, option])

    const getData = async () => {
        // let addons='&filter_last=50'
        // if(!firstTime || true) addons=`&created_at_after=${startDate}&created_at_before=${finishDate}`
        setLoading(true)
        setTimeout(async()=>{
            const url = `/api/alerts/?indicator=${indicator}&limit=${AlertsPerPage}&offset=${offset}&date=${fecha}&resolved=${option}&room=${id}`
            await clienteAxiosValhalla.get(url,{
                signal: controller.signal
            })
            .then((res)=>{
                console.log(res.data)
                setAlerts(res.data.results)
                setCount(res.data.count)
                setLoading(false)
            })
        }, 500)
    }

    // const getCount = async () =>{
    //     const url = `api/alerts/statistics/?created_at_after=${startDate}&created_at_before=${finishDate}`
    //     console.log(url)
    //     const res = await clienteAxiosValhalla.get(url,{
    //         signal: controller.signal
    //     })
    //     console.log(res.data)
    //     if(!state) setGlobalCount(res.data.num_unresolved)
    //     else setGlobalCount(res.data.num_resolved)
    // }

    const getReport = async (fechaInicio, fechaFinal) =>{
        const url = `/api/alerts/report/?indicator=${indicator}&resolved=${option}&created_at_after=${fechaInicio}&created_at_before=${fechaFinal}`
        const {data} = await clienteAxiosValhalla.get(url,{
            signal: controller.signal
        })
        console.log(data)
        download(data, indicator)
    }

    const setSolved = async (id, option) =>{
        await clienteAxiosValhalla.put(`/api/alerts/${id}/`,{
            resolved: option,
        })
        getData()
    }

    return{
        alerts,
        count,
        loading,
        controller,
        getData,
        setSolved,
        getReport,
        globalCount,
        AlertsPerPage
    }
}

export default useAlerts