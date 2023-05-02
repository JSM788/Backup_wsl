import { useOutletContext, useParams } from "react-router-dom";
import StatisticsGraph from '../components/StatisticsGraph';

const Co2DateEstadistica = () => {

  const [ data ] = useOutletContext()

  return (
    <>
      <StatisticsGraph
        //Grafico
        name="CO2"
        items={data.results}
      /> 
    </>
  )
}

export default Co2DateEstadistica