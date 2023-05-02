import React, {useState,useEffect} from 'react'
import {useOutletContext, useParams } from "react-router-dom";
import { clienteAxiosValhalla } from "../config/axios";
import StatisticsGraph from '../components/StatisticsGraph';

const OzonoDateEstadistica = () => {
  
  const [ data ] = useOutletContext()

  return (
    <>
      <StatisticsGraph
        //Grafico
        name="Ozono"
        items={data.results}
      />
    </>
  )
}

export default OzonoDateEstadistica