import { useEffect, useState } from "react";
import { clienteAxiosValhalla } from "../config/axios";
import { today } from "../utils/todayFilter";

const usePromedios = (id, indicator) =>{

  const [value, setValue] = useState(0); 
  const [status, setStatus] = useState(0);

  const controller = new AbortController()

  useEffect(() => {
    getData()

    return () =>{
      controller.abort()
    }
  }, [id])

  const getData = async () => {
    const { data } = await clienteAxiosValhalla.get(`/sensors/api/promedio/general?indicator=${indicator}&date=${today}&room=${id}`,{
      signal: controller.signal
    });
    console.log(data)
    setValue(data.value_indicator)
    setStatus(data.status)
  }

  return {
    value,
    status
  }
}

export default usePromedios;