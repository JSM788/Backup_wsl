import {useOutletContext, useParams } from "react-router-dom";
import StatisticsGraph from '../components/StatisticsGraph';

const PM10DateEstadistica = () => {
  
  const [ data ] = useOutletContext()

  return (
    <>
      <StatisticsGraph
        //Grafico
        name="PM10"
        items={data.results}
      />
    </>
  )
}

export default PM10DateEstadistica