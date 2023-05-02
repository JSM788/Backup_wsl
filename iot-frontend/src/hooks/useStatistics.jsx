import { useEffect } from "react"
import { useState } from "react"
import { clienteAxiosValhalla } from "../config/axios"

const useStatistics = (indicator, room, date, optionalDate, pagination, page) => {
    const [data, setData] = useState([])
    const [isDate, setIsDate] = useState(false)
    // const [slicedArr, setSlicedArr] = useState([])

    const controller = new AbortController()
    const signal = controller.signal

    useEffect(()=>{
        if(optionalDate===date) fetchDailyData()
        else fetchDataRange()
        
        return ()=>{
            controller.abort()
        }
    },[indicator, room, date, optionalDate, page, pagination])

    const fetchDailyData = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/indicators/daily?date=${date}&room=${room}&indicator=${indicator}`,{
            signal: signal
        }).catch(() => {
            if (controller.signal.aborted) {
              console.log('The user aborted the request');
            } else {
              console.error('The request failed');
            }
        })
        
        const formed = data.results.map(a=>{
            const stringResult = a.hours>12 ? a.hours + ':00 pm' : a.hours + ':00 am'
            const obj ={
                hours: stringResult,
                value_indicator: a.value_indicator,
                status: a.status
            }
            return obj
        })
        setData(formed)
        setIsDate(false)
        // setSlicedArr(formed?.slice(0,12))
    }

    const fetchDataRange = async () =>{
        const limit = pagination ? `&limit=20&offset=${page*20}` : '&limit=31'
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/indicators/monthly?date_range_after=${date}&date_range_before=${optionalDate}&room=${room}&indicator=${indicator}${limit}`,{
            signal: signal
        }).catch(() => {
            if (controller.signal.aborted) {
              console.log('The user aborted the request');
            } else {
              console.error('The request failed');
            }
        })
        setData(data.results || [])
        setIsDate(true)
    }

    const fetchMonthlyData = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/indicators/monthly?date=${date}&room=${room}&indicator=${indicator}`,{
            signal: signal
        })
        
        const formed = data.results.map(a=>{
            const stringResult = a.hours>12 ? a.hours + ':00 pm' : a.hours + ':00 am'
            const obj ={
                hours: stringResult,
                value_indicator: a.value_indicator,
                status: a.status
            }
            return obj
        })
        setData(formed)
        setIsDate(true)
        // setSlicedArr(formed?.slice(0,12))
    }

    return{
        data,
        isDate
    }
}

export default useStatistics