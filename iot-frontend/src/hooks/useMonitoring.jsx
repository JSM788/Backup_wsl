import { useState, useEffect } from "react"
import { clienteAxiosValhalla } from "../config/axios"
import { convertedIndicator } from "../utils/urlMonitoringLogic"

const useMonitoring = (sala, indicator) =>{

  const [data, setData] = useState([])
  const [roomStatus, setRoomStatus] = useState()

  const controller = new AbortController()

  useEffect(() => {
    getLastData()
    getSalaStatus()
    const interval = setInterval(async()=>{
      await getLastData()
      await getSalaStatus()
    }, 10000)
    return()=>{
      clearInterval(interval)
      controller.abort()
    }
  },[sala, indicator])

  const getSalaStatus = async() => {
    const res = await clienteAxiosValhalla.get(`/sensors/api/ultimas/${sala}/general`)
    setRoomStatus(res.data)
  }
  
  const getLastData = async() => {
    const res = await clienteAxiosValhalla.get(`/sensors/api/lastten/${sala}/general?indicator=${convertedIndicator(indicator)}`,{
      signal: controller.signal
    })
    setData(res.data)
  }

  return{
    data,
    roomStatus
  }
}

export default useMonitoring