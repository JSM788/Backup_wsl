import { useEffect } from "react"
import { useState } from "react"
import { clienteAxiosValhalla } from "../config/axios"

const useFindings = (indicator, room) => {

    const [daily, setDaily] = useState([])
    const [peaks, setPeaks] = useState([])
    const [weeklyPeaks, setWeeklyPeaks] = useState([])
    const [patterns, setPatterns] = useState([])

    const [live, setLive] = useState()

    useEffect(()=>{
        const interval = setInterval(()=>{
            fetchDaily()
        },6*60*1000)
        fetchDaily()
        setLive(interval)
        fetchPeaks()
        fetchWeeklyPeaks()
        fetchPatterns()

        return ()=>{
            clearInterval(live)
        }
    },[indicator, room])

    const fetchDaily = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/discovery/daily?room=${room}&indicator=${indicator}`)
        console.log(data)
        setDaily(data)
    }

    const fetchPeaks = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/discovery/critics_status?room=${room}&indicator=${indicator}`)
        console.log(data)
        setPeaks(data)
    }

    const fetchWeeklyPeaks = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/discovery/critics?room=${room}&indicator=${indicator}`) 
        setWeeklyPeaks(data)
    }

    const fetchPatterns = async () =>{
        const {data} = await clienteAxiosValhalla.get(`/statistic/api/patterns/indicator/${room}?indicator=${indicator}`) 
        console.log(data)
        setPatterns(data)
    }

    return{
        daily,
        peaks,
        weeklyPeaks,
        patterns
    }
}

export default useFindings