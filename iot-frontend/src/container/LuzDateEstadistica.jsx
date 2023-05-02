import React, {useState,useEffect} from 'react'
import {useParams } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import StatisticsGraph from '../components/StatisticsGraph';

const LuzDateEstadistica = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDataUltimo();
  },[])
  const getDataUltimo = async() => {
    const res = await clienteAxiosValhalla.get(`/sensors/api/lastten/${id}/general?indicator=illumination`);
    setItems(res.data.data);
  }
  return (
    <>
        <StatisticsGraph 
          name='Iluminación'
          DataMin={0}
          DataMax={1500}
          DataKeyEjeX={"value_indicator"}
          rango1={301}
          rango2={501}
          rango3={1501}
          rangoColor1={"#febc2d"}
          rangoColor2={"#57d2a9"}
          rangoColor3={"red"}
          items={items}
        />
    </>
  )
}

export default LuzDateEstadistica