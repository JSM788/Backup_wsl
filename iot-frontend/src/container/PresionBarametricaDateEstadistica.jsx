import React, {useState,useEffect} from 'react'
import {useParams } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import StatisticsGraph from '../components/StatisticsGraph';

const PresionBarametricaDateEstadistica = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDataUltimo();
  },[])
  const getDataUltimo = async() => {
    const res = await clienteAxiosValhalla.get(`/sensors/api/lastten/${id}/general?field=barometric_presion`);
    setItems(res.data.data);
  }
  return (
    <>
        <StatisticsGraph 
         //Grafico
         DataMin={0}
         DataMax={3000}
         DataKeyEjeX={"barometric_presion"}
         rango1={760}
         rango2={1014}
         rango3={3001}
         rangoColor1={"#febc2d"}
         rangoColor2={"#57d2a9"}
         rangoColor3={"red"}
         items={items}
         />
    </>
  )
}

export default PresionBarametricaDateEstadistica