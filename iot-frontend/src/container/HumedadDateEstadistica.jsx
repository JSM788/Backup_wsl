import {useOutletContext } from "react-router-dom";
import StatisticsGraph from '../components/StatisticsGraph';


const HumedadDateEstadistica = () => {
  
  const [ data ] = useOutletContext()

  return (
    <>
      <StatisticsGraph
        //Grafico
        name="Humedad"
        items={data.results}
      />
    </>
  )
}

export default HumedadDateEstadistica