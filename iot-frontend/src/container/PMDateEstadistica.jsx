import React, {useState,useEffect} from 'react'
import { useOutletContext } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import StatisticsGraph from '../components/StatisticsGraph';

const PMDateEstadistica = () => {
  
  const [ data ] = useOutletContext()

  return (
    <>
      <StatisticsGraph
        //Grafico
        name="PM2.5"
        items={data.results}
      />
    </>
  )
}

export default PMDateEstadistica